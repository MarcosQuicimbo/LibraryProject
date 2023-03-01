//igualito al libro.controller.js 
'use strict'
var Usuario=require('../models/usuario');
var path = require('path');
var fs=require('fs');
const express = require('express'); 
// const cors = require('cors');
const routerExpress = express.Router()
var routerRoutes = require('../routes/libros.routes');
var controller={
    inicio:function(req,res){//generar un inicio, 
        var session = req.session; 
        var user = session.userid; 
        console.log(session);
        return res.status(201).send({message:"<h1>Hola 2</h1>",user});
    },
    saveUsuario:function(req,res){
        var usuario=new Usuario();
        var params=req.body;
        usuario.user=params.user;
        usuario.password=params.password;
        usuario.nombre=params.nombre;
        usuario.apellido=params.apellido;
        usuario.imagen=null;
 
        usuario.save((err,usuarioGuardado)=>{
            if (err) return res.status(500).send({message:'Error al guardar'});
            if(!usuarioGuardado) return res.status(404).send({message:'No se ha guardado el usuario'});
            return res.status(200).send({usuario:usuarioGuardado});
        })
    },

    login:function(req,res){
        var user=req.body.user;//de donde va a venir , de un form body llamado user
        var password=req.body.password;//lo mismo 
        var session=req.session;//también capturo la sesión
        console.log(user,password,session);//imprimo la sesión que se abre al hacer login 
        if (user==null || password==null) return res.status(404).send({message:'Datos incorrectos'})
        Usuario.findOne({user,password},(err,usuario)=>{
        if (err) return res.status(500).send({message:'Error al recuperar los datos'});
        if(!usuario) return res.status(404).send({message:'Usuario o contraseña incorrectos'});
        if(user==usuario.user && password==usuario.password){//se hace la validación
            session.req.session;
            session.user=req.body.user;
            //res.send({message:"holi"}) //("holi");//window.alert("Bienvenido");
            //res.send(`Bienvenido ${user} <a href=\'/logout'>Logout</a>`)
            //res.send("Bienvenido ${user}")
            //res.redirect('http://localhost:4200/logout');
            //res.redirect('\inicio')
            console.log("estas dentro de la sesion",`${user}`)
            this.routerRoutes.navigateByUrl('/http://127.0.0.1:4200/login');
            
            // res.send({"name":"holi"})
            // router.use((req, res, next) => {
            //     console.log('Time: ', Date.now())
            //     next()
            // })
            // router.get('/', (req, res) => {
            //     res.send('Birds home page')
            //   })
            // router.get('/', (req, res) => {
            //     res.send('About birds')
            // })
           // window.location.replace("http://sitioweb.com");
           
        }
       })
    },
    logout:function(req,res){
        req.session.destroy();
        res.redirect('/inicio');
    },
    uploadImage:function(req,res){
        var libroId = req.params.id; 
        var fileName = 'Imagen no subida'; 
        
        if(req.files){
            var filePath = req.files.imagen.path;
            var file_split = filePath.split('\\');
            var fileName = file_split[1]; 
            var extSplit = fileName.split('\.'); 
            var fileExt = extSplit[1]; 
            if (fileExt=='png' || fileExt=='jpg' || fileExt=='jpeg' || fileExt=='gif'){
                Libro.findByIdAndUpdate(libroId, {imagen:fileName},{new:true},(err,libroActualizado)=>{
                    if(err) return res.status(500).send({message:'La imagen no se ha subido'});
                    if(!Libro) return res.status(404).send({message:'el libro no existe y no se subió la imagen'});
                    return res.status(200).send({libro:libroActualizado}); 
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'La extensión no es válida'})
                });
            }
        }else{
            return res.status(200).send({message:fileName});
        }
    }, 
    getImagen:function(req,res){
        var file=req.params.imagen;
        var path_file="./uploads/"+file;
        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                res.status(200).send({message:'No existe la imagen'});
            }
        })
    }
}
module.exports=controller;



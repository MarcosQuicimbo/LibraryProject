//igualito al libro.controller.js 
'use strict'
var Usuario=require('../models/usuario');
var fs=require('fs');
const path = require('path');
const usuario = require('../models/usuario');
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
        var user=req.body.user;//de donde va a venir , de un form body 
        var password=req.body.password;//lo mismo 
        var session=req.session;//también capturo la sesión
        console.log(user,password,session);
        if (user==null || password==null) return res.status(404).send({message:'Datos incorrectos'})
       Usuario.findOne({user,password},(err,usuario)=>{
        if (err) return res.status(500).send({message:'Error al recuperar los datos'});
        if(!usuario) return res.status(404).send({message:'Usuario o contraseña incorrectos'});
        if(user==usuario.user && password==usuario.password){
            session.req.session;
            session.user=req.body.user;
            res.send(`Bienvenido ${user} <a href=\'/logout'>Logout</a>`)
        }
       })
    },
    logout:function(req,res){
        req.session.destroy();
        res.redirect('/inicio');
    }
}
module.exports=controller;



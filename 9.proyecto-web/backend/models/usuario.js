//voy a necesitar un modelo de usuario el constructor entre comiilas 
'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
 
var UsuarioSchema=Schema({
    user:String,
    password:String,
    nombre:String,
    apellido:String,
    imagen:String
});
module.exports=mongoose.model('Usuario',UsuarioSchema);

//en la autenticación hago el manejo de la sessión
//se debe cerrar la sesión 
//node, express , express session 
//como voy a mapear en la base de datos 
//un prod. un controlador para ese prod. 
//usuario también un controller update, create 
//necesito un controlador 
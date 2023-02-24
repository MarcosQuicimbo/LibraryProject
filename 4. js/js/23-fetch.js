'use strict'
/*
fetch (ajax) permite realizar peticiones a servicios / api rest -->servicio remoto
recibe un url que devuelve un json
promesas: que permiten capturar datos utilizando el metodo then
          si se produce un error se captura con el catch
          tres estados: pendiente, cumplida, rechazada

*/

/*
var divUsuarios=document.querySelector("#usuarios");
var usuarios=[];
fetch('https://jsonplaceholder.typicode.com/users')
.then(data=>data.json())//recibir un parametro y convertirlo en JSON
.then(data=>{
    usuarios=data;
    console.log(usuarios);
    usuarios.map((data,i)=>{
        let nombre=document.createElement("h3");
        nombre.innerHTML=i+"-"+data.name+"-"+data.address.street;
        divUsuarios.append(nombre)
    })
})
*/


var divUsuarios=document.querySelector("#usuarios");
var divUsuarioGeorge=document.querySelector("#usuarioGeorge");

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function getUsuarioGeorge(){
    return fetch('https://reqres.in/api/users/1');
}
function listadoUsuarios(usuarios){
    usuarios.map((data,i)=>{
        let nombre=document.createElement("h3");
        nombre.innerHTML=i+"-"+data.name+"-"+data.address.street;
        divUsuarios.appendChild(nombre);
        document.querySelector(".loading").style.display='none';
    });
}
function mostrarUsuarioGeorge(usuario){
        let nombre=document.createElement("h3");
        let avatar=document.createElement("img");
        nombre.innerHTML=usuario.data.first_name;

        avatar.src=usuario.data.avatar;
        avatar.width="80";

        divUsuarioGeorge.appendChild(nombre);
        divUsuarioGeorge.appendChild(avatar);
        document.querySelector("#usuarioGeorge .loading").style.display='none';
}
getUsuarios()
.then(data=>data.json())
.then(users=>{
    listadoUsuarios(users);
})
.then(data=>{
    return getUsuarioGeorge();
})
.then(data=>data.json())
.then(
    user=>{
        mostrarUsuarioGeorge(user);
    }
)
.catch(error=>{
    alert("Error en la peticion");
})
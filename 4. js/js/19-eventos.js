'use strict';
windows.addEventListener('load',()=>{

//eventos cuando el ususario da click, pasa por un elemento
var boton = document.querySelector("#boton");
var boton2 = document.querySelector("#boton2");
console.log(boton);
function cambiarColor(){
    console.log("He sido presionado");
    var bg = boton.style.background;
    //console.log(bg);
    if(bg=="blue none repeat scroll 0% 0%"){
        boton.style.background="red";
        boton.style.padding="10px";
    }else{
        boton.style.background="blue";
        boton.style.padding="5px";
        //console.log(bg);
    }
}

//evento click
boton2.addEventListener("click", function(){
    this.style.border="10px solid black";
});

//evento mouseover
boton2.addEventListener("mouseover", function(){
    this.style.background="yellow";
});

//evento mouseout
boton2.addEventListener("mouseout", function(){
    this.style.background="pink";
});

//evento focus
var input = document.querySelector("#nombre");
input.addEventListener('focus', function(){
    console.log("focus-Estoy dentro del input"); 
});

//evento blur
input.addEventListener('blur', function(){
    console.log("blur-Estoy fuera del input"); 
});

//evento keydown
input.addEventListener('keydown', function(){
    console.log("keydown-Estoy precionando la recla",String.fromCharCode(event.keyCode)); 
});

//evento keypress
input.addEventListener('keypress', function(){
    console.log("keypress-Estoy precionando la recla",String.fromCharCode(event.keyCode)); 
});

//evento keyup
input.addEventListener('keyup', function(){
    console.log("keyup-Estoy soltando la recla",String.fromCharCode(event.keyCode)); 
});

});


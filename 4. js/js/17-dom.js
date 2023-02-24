'use strict';
/*
DOM - Document Object model: arbol de todos los elementos
que existen en una página
Encontrar elementos con un id concreto
hay dos formass de acceder al objeto
var caja = document.getElementById("miCaja");
*/
var caja = document.querySelector("#miCaja");
caja.style.background = "red";
caja.style.padding = "10px";
caja.style.color = "white";
caja.innerHTML = "Texto";
caja.className = "hola";
console.log(caja);

//encontrar elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);
var contenidoDiv2 = todosLosDivs[2].textContent;
console.log(contenidoDiv2);

var contenidoDiv = todosLosDivs[3];
contenidoDiv.innerHTML = "Otro texto";
contenidoDiv.style.background = "blue";
contenidoDiv.style.color = "white";

var seccion = document.querySelector("#miSeccion");
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent=='string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
var hr = document.createElement("hr");
seccion.append(hr);

//encontrar elementos por su clase
var divRojos = document.getElementsByClassName("rojo");
var divAmarillo = document.getElementsByClassName("amarillo");
console.log(divRojos);
console.log(divAmarillo);
divAmarillo[0].style.background = "yellow";

var div;
for(div in divRojos){
    if(divRojos[div].className=="rojo"){
        divRojos[div].style.background = "red";
    }
}
//query selector permite seleccionar un elemento o el primer
//elemento de una clase
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);






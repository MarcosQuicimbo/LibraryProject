'use strict';
//plantillas de texto
var nombre = prompt("Ingrese su snombre");
var apellido = prompt("Ingrese su apellido");
var cadena = "Mi nombre es "+nombre+
            "<br> Mi apellido es "+apellido;
document.write(cadena);

var cadena2 = `
<h1>Mi nombre es ${nombre}</h1>
<h1>Mi apellido es ${apellido}</h1>
`;
document.write(cadena2);
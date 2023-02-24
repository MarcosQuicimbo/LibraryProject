'use strict';
/*
    Parametros REST Y SPREAD
    -ayudan en el manjeo de arreglos y listas de parametros
    -SPREAD permite expandir el uso de argumentos
    -REST es la coleccion de todos los elementos de un mismo arreglo
*/
function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log("Fruta1: " + fruta1);
    console.log("Fruta2: " + fruta2); 
    console.log(restoFrutas);
}
listadoFrutas("piña","limon", "manzana", "naranja", "pera", "coco");
var frutas = ["uvas", "fresas"];
listadoFrutas(...frutas,"bananas", "sandia");
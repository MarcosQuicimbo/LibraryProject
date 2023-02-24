'use strict';
var categorias = ["Accion", "Drama", "Terrors", "Comedia"];
var peliculas = ["Traformers", "La mascara", "Titanic", "Saw", "American Pie"];

var cine = [categorias,peliculas];
console.log(cine[0][1]);
console.log(cine[1][0]);
console.log(cine[1][2]);
//operaciones con arrays
//agregar
peliculas.push("La era de hielo");
console.log(peliculas);
//eliminar un elemento
var indice = peliculas.indexOf("Saw");
console.log(indice);
if (indice > 1) {
    peliculas.splice(indice,1);
    console.log(peliculas);
}
//conversion de array a string separado por comas
var peliculas_strings = peliculas.join();
console.log(peliculas_strings);
//string a arrays
var cadenas = "texto1,texto2,texto3,texto4";
var cadena_array = cadenas.split(",");
console.log(cadena_array);
//ordenar un array
console.log(peliculas.sort());
//invertir un array
console.log(peliculas.reverse());
//recorrer un array --> elemento en el arreglo
for (let i in peliculas) {
    document.write(peliculas[i]);
}
//buscar en arrays
var busqueda = peliculas.findIndex(
    peliculas => peliculas=="American Pie");
console.log(busqueda);
//busqueda con condiciones
var precio = [10,8,2,3];
var busqueda2 = precio.some(precio => precio>8);
console.log(busqueda2);
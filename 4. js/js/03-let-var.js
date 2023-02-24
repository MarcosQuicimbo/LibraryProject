'use strict'
/*
let se usa para variables locales
var se usa para variables globales 
*/
var numero=1;
console.log(numero);
if(true){
    var numero=8;
    console.log(numero)
}
console.log(numero)

var num=2;
console.log(num);
if(true){
    let num=3;
    console.log(num)
}
console.log(num)
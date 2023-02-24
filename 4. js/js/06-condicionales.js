'use strict'
/*CONDICIONAL IF
Si A es igual a B entonces haz algo
operadores relacionales:
mayor: >
menor: <
mayor igual: >=
menor igual: <=
igual: == ===
distinto: !=
*/
var edad=80;
var nombre="Luis";
if(edad>=18){
    console.log(nombre+" es mayor de edad");
    if(edad<=30){
        console.log("Eres joven");
    }else if(edad<=65){
        console.log(nombre+" es anciano");
    }else{
        console.log(nombre+" es un adulto mayor");
    }
}else{
    console.log(nombre+" eres menor de edad")
}
/*OPERADORES LOGICOS
AND (y): &&
OR: || 
NOT: !
*/
var anio=2022;
if(anio!=2019){
    console.log("No estamos en el anio 2019");
}
if(anio>=2019&&anio<=2022){
    console.log("Hemos experimentado una pandemia");
} 
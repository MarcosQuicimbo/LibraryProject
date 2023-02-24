'use strict';
//funciones son un grupo de instrucciones que es puede reutilizar
function mensaje(){
    console.log("Hola");
    alert("Bienvenidos");
    return "ok";
}
//Llamar o invocar a la función
var resultado = mensaje();
console.log(resultado);
//funciones con parametros
function suma(numero1, numero2){
    console.log("Suma "+(numero1+numero2));
}
suma(4,3);

function calculadora(numero1, numero2){
    console.log("Suma "+(numero1+numero2));
    console.log("Resta "+(numero1-numero2));
    console.log("Multiplicacion "+(numero1*numero2));
    console.log("Division "+(numero1/numero2));
}
calculadora(2,8);

//funciones con parametros adicionales
function calculadora2(numero1, numero2, mostrar=false){
    if(mostrar==false){
        console.log("Suma "+(numero1+numero2));
        console.log("Resta "+(numero1-numero2));
        console.log("Multiplicacion "+(numero1*numero2));
        console.log("Division "+(numero1/numero2));
    }else{
        document.write("Suma "+(numero1+numero2)+"<br>");
        document.write("Resta "+(numero1-numero2)+"<br>");
        document.write("Multiplicacion "+(numero1*numero2)+"<br>");
        document.write("Division "+(numero1/numero2)+"<br>");
    }
}
calculadora2(4,5,true);
calculadora2(2,5);

function porConsola(numero1, numero2){
    console.log("Suma "+(numero1+numero2));
    console.log("Resta "+(numero1-numero2));
    console.log("Multiplicacion "+(numero1*numero2));
    console.log("Division "+(numero1/numero2));
}

function porPantalla(numero1, numero2){
    document.write("Suma "+(numero1+numero2)+"<br>");
    document.write("Resta "+(numero1-numero2)+"<br>");
    document.write("Multiplicacion "+(numero1*numero2)+"<br>");
    document.write("Division "+(numero1/numero2)+"<br>");
}

function calculadora3(numero1, numero2, mostrar=false){
    if(mostrar==false){
       porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
}
calculadora3(4, 3, true);



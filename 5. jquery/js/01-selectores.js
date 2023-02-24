//evento ready: verifica que toda la pagina este cargada
$(document).ready(function(){

//seleccion de parrafos por id
var rojo=$("#rojo").css("background","red");
//encadenamiento de elementos
var amarillo=$("#amarillo").css("background","yellow")
                           .css("color","red");

var verde=$("#verde").css("background","green")
                           .css("color","white");

//selectores de clase
var miClase=$(".zebra");
    miClase.css("padding","20px");

$(".sin_borde").click(function(){
    $(this).addClass("zebra");
});

//selectores por etiqueta
var parrafos=$('p').css("cursor","pointer");
parrafos.click(function(){
    var thiss=$(this);
    if(thiss.hasClass('zebra')){
        thiss.addClass('grande');
    }
});
//selectores de varias etiquetas
$('p,a').addClass('nuevaClase');

//seleccion de atributos
$('[title="Google"]').css("background","green")
                     .css("color","white");
$('[title="Facebook"]').css("background","blue")
                     .css("color","white");

var busqueda=$('#caja').find(".resaltado");
console.log(busqueda);
//parent permite saltar etiquetas
var busqueda2=$('#elemento2').parent().parent().find(".resaltado");
console.log(busqueda2);
});
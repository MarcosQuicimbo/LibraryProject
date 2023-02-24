$(document).ready(function(){
    //evento mouseover y mouseout
    var caja=$("#caja");
   /* caja.mouseover(function(){
        $(this).css("background","green");
    });
    caja.mouseout(function(){
        $(this).css("background","blue");
    });
    */

    function cambiarVerde(){
        $(this).css("background","green");
    }
    function cambiarAzul(){
        $(this).css("background","blue");
    }
    //evento hover hace lo mismo que lo anterior pero 
    //más rapido y sencillo
    caja.hover(cambiarVerde,cambiarAzul);
    
    //click
    /*caja.click(function(){
        $(this).css("background","pink")
               .css("color","white");
    });*/

    //doble click
    caja.dblclick(function(){
        $(this).css("background","red")
               .css("color","white");
    });

    caja.on("click",function(){
        $(this).css("background","#ccc")
               .css("color","white");
    });

    //focus-blur
    var nombre=$("#nombre");
    var datos=$("#datos");
    nombre.focus(function(){
        $(this).css("border","2px solid blue");
    });
    nombre.blur(function(){
        $(this).css("border","2px solid red");
    });

    //mousedown-mouseup
    datos.mousedown(function(){
        $(this).css("border-color","yellow");
    });
    datos.mouseup(function(){
        $(this).css("border-color","red");
    });

    //mousemove
    $(document).mousemove(function(){
        console.log("Posicion en X: "+event.clientX);
        console.log("Posicion en Y: "+event.clientY);
        $('body').css("cursor","none");
        $('#sigueme').css("left",event.clientX)
                     .css("top",event.clientY);
    });
    
});
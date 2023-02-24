$(document).ready(function(){
    var caja=$("#caja");
    //$("#mostrar").hide();
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();
        caja.fadeTo('slow',1);//velocidad (slow,fast), opacidad (1-max,0-min)
    });
    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        caja.slideUp('slow',function(){
            console.log("Estoy oculto");
        });
    });

    $("#todoEnUno").click(function(){
        caja.slideToggle('slow');
    });

    $("#animar").click(function(){
        caja.animate({
            marginLeft:'500px',
            fontSize:'40px',
            height:'110px'
        },'slow')
        .animate({
            borderRadius:'900px',
            marginTop:'150px'
        },'slow')
        .animate({
            borderRadius:'0px',
            marginTop:'0px'
        },'slow')
        .animate({
            borderRadius:'100px',
            marginTop:'0px'
        },'slow')
        .animate({
            marginLeft:'500px',
            fontSize:'40px',
            height:'110px'
        },'slow');
    });

    
});
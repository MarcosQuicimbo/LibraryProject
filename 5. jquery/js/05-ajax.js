$(document).ready(function(){
    /*
    ajax permite realizar peticiones asincronas a un servidor
    sin necesidad de recargar las pagina, solo una parte
    load permite obtener informacion por get e incrustar en la pagina
    ante un request se obtiene un response
    $("#datos").load("https:reqres.in/api/users");
    */
   $.get("https://reqres.in/api/users",{page:1},function(response){
    response.data.forEach((element,index) => {
        $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
    });
   });

   $("#formulario").submit(function(e){
    e.preventDefault();//evitar redirecccion
    var usuario={
        nombre:$('input[name="name"]').val(),
        web:$('input[name="web"]').val()
    };
    $.ajax({
        type:'POST',
        url:$(this).attr("action"),
        data:usuario,
        beforeSend:function(){
            console.log("Usuario guardado");
        },
        success:function(response){
            console.log(response);
        },
        error:function(){
            console.log("Error en el envío");
        },
        timeout:1000
    });
    return false;
   });
});
'use strict';
window.addEventListener('load',()=>{
    var pelicula={
        titulo:"Transformers",
        anio:2012,
        pais:"Estados Unidos",
        idiomas:["ingles","Español","Ruso"]
    };
    console.log(pelicula);
    console.log(pelicula.titulo);
    pelicula.anio=2019;
    console.log(pelicula);
    //las bdd no relacionales almacenan informacion de esta forma
    var peliculas=[
        {titulo:"Titanic",anio:2012,pais:"Estados Unidos"},
        {titulo:"La era de hielo",anio:2012,pais:"Estados Unidos"},
        {titulo:"XMEN",anio:2012,pais:"Estados Unidos"},
        {titulo:"La vida es bella",anio:2012,pais:"Estados Unidos"},
        pelicula
    ];
    console.log(peliculas);
    var div_peliculas=document.querySelector("#peliculas");
    var index;
    for(index in peliculas){
        var parrafo=document.createElement("p");
        parrafo.append(peliculas[index].titulo+" - "+peliculas[index].anio);
        div_peliculas.append(parrafo);
    }
});
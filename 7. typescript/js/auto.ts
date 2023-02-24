//interface define los metodos obligatorios que debe tener una clase
interface AutoBase{
    setColor(color);
    getColor();
}

function pegarCalcomania(logo:string){
    return function(targer:Function){
        targer.prototype.agregarCalcomania = function():void{
            console.log("Calcomania en auto: "+logo);
        }
    }
}
//@pegarCalcomania('hola mundo')
//clase o plantilla (objeto)
class Auto implements AutoBase{
    //propiedades
    //public porque necesitamos acceder desde otras clases
    public marca: string;
    public color: string;
    public cilindraje: string;
    public precio: number;

    //metodos-finciones-constructores
    //constructor(){}
    constructor(marca, color, cilindraje, precio) {
       this.marca = marca; 
       this.color = color;
       this.cilindraje = cilindraje;
       this.precio = precio;
    }
    public setColor(color){
        return this.color = color;
    }
    public getColor(){  
        return this.color;
    }
}

var auto = new Auto("Ford","Plata","2500 cc",4000);
var camioneta = new Auto("Mazda","azul","2700 cc",3000);
console.log(auto,camioneta);

//herencia para permitir heredar todas las caracteristicas de una clase a una subclase
class Deportivo extends Auto{
    public techoCorredizo:boolean;
    setTechoCorredizo(techo:boolean){
        this.techoCorredizo = techo;
    }
    getTechoCorredizo(){
        return this.techoCorredizo;
    }
}
var auto2 = new Deportivo("Mercedes","Plata","2500 cc", 4000);
auto2.setTechoCorredizo(true);
console.log(auto2);
//auto2.agregarCalcomania();

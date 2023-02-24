var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function pegarCalcomania(logo) {
    return function (targer) {
        targer.prototype.agregarCalcomania = function () {
            console.log("Calcomania en auto: " + logo);
        };
    };
}
//@pegarCalcomania('hola mundo')
//clase o plantilla (objeto)
var Auto = /** @class */ (function () {
    //metodos-finciones-constructores
    //constructor(){}
    function Auto(marca, color, cilindraje, precio) {
        this.marca = marca;
        this.color = color;
        this.cilindraje = cilindraje;
        this.precio = precio;
    }
    Auto.prototype.setColor = function (color) {
        return this.color = color;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    return Auto;
}());
var auto = new Auto("Ford", "Plata", "2500 cc", 4000);
var camioneta = new Auto("Mazda", "azul", "2700 cc", 3000);
console.log(auto, camioneta);
//herencia para permitir heredar todas las caracteristicas de una clase a una subclase
var Deportivo = /** @class */ (function (_super) {
    __extends(Deportivo, _super);
    function Deportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deportivo.prototype.setTechoCorredizo = function (techo) {
        this.techoCorredizo = techo;
    };
    Deportivo.prototype.getTechoCorredizo = function () {
        return this.techoCorredizo;
    };
    return Deportivo;
}(Auto));
var auto2 = new Deportivo("Mercedes", "Plata", "2500 cc", 4000);
auto2.setTechoCorredizo(true);
console.log(auto2);
//auto2.agregarCalcomania();

//recipiente que permite guardar cuando llame desde front-back 

export class Usuario {
    constructor(
        public _id:string,
        //public email:string,
        public user:string, 
        public password:string, 
        public nombre: string, 
        public apellido: string,
        //public imagen: string
    ){}
}
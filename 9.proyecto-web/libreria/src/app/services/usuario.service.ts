//pongo los métodos que usa la librería
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from "../models/usuario";
import { Observable } from "rxjs";
import { Global } from "./global";

// como me va a permitir consultar 
@Injectable()
export class UsuarioService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url
    }
    
    //hacer el login
    login(usuario:Usuario):Observable<any>{
        let params = JSON.stringify(usuario);
        let headers = new HttpHeaders().set('Content-Type','application/json'); 
        return this._http.post(this.url+'login',params,{headers:headers});
    }
    
    //hacer el logout 
    logout():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json'); 
        return this._http.get(this.url+'logout',{headers:headers});
    }
    saveUsuario(usuario:Usuario):Observable<any>{
        let params = JSON.stringify(usuario);
        let headers = new HttpHeaders().set('Content-Type','application/json'); 
        return this._http.post(this.url+'create-user',params,{headers:headers});
    }
}
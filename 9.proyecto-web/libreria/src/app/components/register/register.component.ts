import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
  providers:[UsuarioService]
})
export class RegisterComponent {
  public titulo:string;
  public usuario:Usuario;
  public usuarioGuardar:Usuario;
  public url:string;
  public status:string;
  public idGuardardo:string;
  
  constructor(
    private _usuarioService:UsuarioService,
  ) {
    this.titulo="Register user";
    this.url=Global.url;
    this.usuario=new Usuario('','','','','');
    this.usuarioGuardar=new Usuario('','','','','');
    this.status="";
    this.idGuardardo="";
   }

  ngOnInit(): void {
  }

  guardarUser(form:NgForm){
    this._usuarioService.saveUsuario(this.usuario).subscribe(
      response=>{
        if(response.usuario){
         
            (result:any)=>{
              this.usuarioGuardar=result.response;
              this.status='success';
              console.log(response.libro._id);
              this.idGuardardo=result.libro._id;
              
            };
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );form.reset();
  } 
}

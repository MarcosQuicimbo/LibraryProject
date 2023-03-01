import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
//import { CargarService } from '../../services/cargar.service';
import { Usuario } from '../../models/usuario';
import { Global } from '../../services/global';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsuarioService]
})
export class LoginComponent implements OnInit{
  public error: boolean;
  public titulo:string;
  public usuario:Usuario;
  //public usuarioGuardar:Usuario;
  public url: string;
  public status: string;
  public idGuardado:string;
  //public archivosParaCargar: Array<File>;
  //nos permita acceder a un componente secundario 
  //@ViewChild('archivoImagen') fileInput: any; //usar elementos del doom

  constructor(
    private _usuarioService:UsuarioService,
    //private _cargarService:CargarService, 
    public _router:Router
  ){
    this.error=false;
    this.titulo="Registar usuario";
    this.url=Global.url;
    this.usuario=new Usuario("","","","","");
    // this.usuarioGuardar= new Usuario("","","","","",""); 
    this.status=""; 
     this.idGuardado=""; 
    // this.archivosParaCargar=[];
  }
  // loginUser(form:NgForm){
  //   const user = form.value.user;
  //   const password = form.value.password;
  //   this._usuarioService.login(user,password).subscribe(
  //     ()=>{

  //     }, 
  //     (error)=>{
  //       this.errorMessage= error.message;
  //     })
  //   );
  // }

  // loginUser(form:NgForm){
  //   this._usuarioService.login(this.usuario).subscribe(
  //     response=>{
  //       if(response.usuario){
  //         if(this.archivosParaCargar){
  //           this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.usuario._id,[],this.archivosParaCargar,'imagen')
  //           .then((result:any)=>{
  //             this.usuarioGuardar=result.response;
  //             this.status='success'; 
  //             console.log(response.usuario._id);
  //             this.idGuardado=result.usuario._id;
  //             form.reset();
  //             this.fileInput.nativeElement.value='';
  //             //this._router.navigateByUrl('/inicio');
  //           });
  //         }else{
  //           this.status='failed';
  //         }
  //       }else{
  //         this.status='failed';
  //       }
  //     },
  //     error=>{
  //       console.log(<any>error);
  //     }
  //   );
  // }
  // imagenChangeEvent(archivoSeleccionado:any){
  //   this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  // }
  // onLogin(form:NgForm): void {
  //   this._usuarioService.login(this.usuario).subscribe(response => {
  //     this.router.navigateByUrl('/inicio');
  //   });
  // loginUser(loginForm:NgForm):void{
  //   this._usuarioService.login(this.usuario).subscribe(
  //     data=>{
  //       console.log(data);
  //       //this._router.navigate([this.url+'/logout']);
  //       //this._router.navigateByUrl('/inicio');
  //       this.reloadPage();
  //     },
  //     error=>{
  //       console.error(error);
  //       this.error=true;
  //     }
  //   );
  //   loginForm.reset();
  // }

    loginUser(form:NgForm){
    this._usuarioService.login(this.usuario).subscribe(
      response=>{
        if(response.usuario){
            (result:any)=>{
              this.status='success'; 
              console.log(response.usuario._id);
             this.idGuardado=result.usuario._id;
              form.reset();
              // this._router.navigateByUrl('/http://localhost:4200/login');
            };
        }else{
          this.status='failed';
          console.log("XXXX, algo ha pasado")
        }
      },
      error=>{
        console.log(<any>error);
        console.log("algo ha pasó")
      }
    );
  }


  ngOnInit(): void {
  }

  reloadPage(): void {
    window.location.reload();
  }
}


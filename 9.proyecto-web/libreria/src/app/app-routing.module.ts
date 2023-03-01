import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearlibroComponent } from './components/crearlibro/crearlibro.component';
import { DetallelibroComponent } from './components/detallelibro/detallelibro.component';
import { EditarlibroComponent } from './components/editarlibro/editarlibro.component';
import { HomeComponent } from './components/home/home.component';
import { LibrosComponent } from './components/libros/libros.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
{path:'inicio',component:HomeComponent},
{path:'libros',component:LibrosComponent},
{path:'guardar-libro',component:CrearlibroComponent},
{path:'contacto',component:ContactoComponent},
{path:'libro/:id',component:DetallelibroComponent},
{path:'editar-libro/:id',component:EditarlibroComponent},
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent},
{path:'create-user',component:RegisterComponent},
{path:'**',component:HomeComponent}//si no hay un componente el por defecto es el home 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
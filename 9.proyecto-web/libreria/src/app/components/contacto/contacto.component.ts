import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  name: string ;
  email: string;
  message: string;
  submitted: boolean = false;

  constructor(){
    this.name = ""; 
    this.email= ""; 
    this.message=""; 

  }
  onSubmit() {
    this.submitted = true;
  }
}

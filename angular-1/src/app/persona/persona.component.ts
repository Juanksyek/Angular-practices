import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent{
  nombre: string = 'Juan';
  apellido: string ='Flores';
  private edad: number = 24;

  getEdad():number{
    return this.edad;
  }
} 

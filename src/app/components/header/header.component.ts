import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor() {  
  }

  nombre = "Ale";

  cambiarNombre() {
    this.nombre = "Cambio 2: Victoria";
  }

  contador = 0;
  contar() {
    // this.contador +=1;
    this.contador++;
  }

  array = [1, 2, 3, 4, 5]
  add() {
    this.array.push(Math.random());
  }
  

}

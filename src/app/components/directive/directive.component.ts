import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  animales: Array<any> = [
    {tipo: 'plato', nombre: 'Donald', edad: 3},
    {tipo: 'gato', nombre: 'michi', edad: 2},
    {tipo: 'perro', nombre: 'Goofy', edad: 1},
  ];

}

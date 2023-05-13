import { Component } from '@angular/core';
import { Usuario, UserType } from '../others/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloWorld';

  // Formato de la interfaz - Tipo Objeto
  // user: Usuario = {
  //   Id: 1,
  //   Nombre: "Ale",
  //   Apellido: "Ramirez",
  //   Email: "Ale@Ale.com",
  //   Contra: "123",
  //   Tipo: UserType.Admin
  // }

  // Formato de la interfaz - Tipo Array
  user: Usuario [] = [
    {
    Id: 1,
    Nombre: "Ale",
    Apellido: "Ramirez",
    Email: "Ale@Ale.com",
    Contra: "123",
    Tipo: UserType.Admin
    },
    {
    Id: 2,
    Nombre: "Jaime",
    Apellido: "Portillo",
    Email: "J@Jaime.com",
    Contra: "123",
    Tipo: UserType.Cliente
    }
  ]

}

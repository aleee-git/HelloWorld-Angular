
export interface Usuario {
    Id: number,
    Nombre: string,
    Apellido: string,
    Email: string,
    Contra: string,
    Tipo: UserType
}

// Enumeraciones = Lista de posibilidades
export enum UserType {
    Admin,
    Cliente,
    Tecnico
  }
import { Injectable } from '@angular/core';
import { usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: usuario[] = [
    {usuario: "eroldan", nombre: 'Ezequiel', apellido: "Roldan", sexo: 'Masculino'},
  ];
  
  constructor() { }
  getUsuario(){
    return this.listUsuarios.slice(); // Retorna una copia del array
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index,1);
  }
}

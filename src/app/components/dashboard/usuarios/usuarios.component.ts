import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { usuario } from 'src/app/Interfaces/usuario';

import { UsuarioService } from 'src/app/services/usuario.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit{

 listUsuarios: usuario[] = [];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];

  dataSource! : MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator! : MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;
  constructor(private _usuarioServices: UsuarioService){}

  ngOnInit():void{
   this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.listUsuarios = this._usuarioServices.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index:number){
console.log(index),
 this._usuarioServices.eliminarUsuario(index);
 this.cargarUsuarios();
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';


const routes: Routes = [
 {path:'',component: DashboardComponent,children:[
  {path:'',component:InicioComponent}, // Navega al componente de inicio
  {path:'usuarios',component:UsuariosComponent}, // Navega al componente de usuarios
  {path:'crear-usuario',component:CrearUsuarioComponent},
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

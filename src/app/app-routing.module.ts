import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarRolComponent } from './buscar-rol/buscar-rol.component';
import { ConsultarRolesComponent } from './consultar-roles/consultar-roles.component';
import { RolComponent } from './rol/rol.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [

  {path:'', pathMatch:'full',redirectTo:'Roles'},
  {path: 'Roles', component:RolesComponent},
  {path: 'consultar', component:ConsultarRolesComponent},
  {path: 'rol', component:RolComponent},
  {path: 'rol/:id', component:RolComponent},
  {path: 'buscar', component:BuscarRolComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

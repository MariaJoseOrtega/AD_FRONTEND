import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoFormComponent } from '../feature/permiso/form/permiso-form.component';
import { PermisoListComponent } from '../feature/permiso/list/permiso-list.component';
import { RegistroFormComponent } from '../feature/registro/form/registro.form.component';
import { RegistroListComponent } from '../feature/registro/list/registro-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'permiso-form', component:PermisoFormComponent},
      {path: 'permiso-form/:id', component:PermisoFormComponent},
      {path: 'permiso-list', component:PermisoListComponent}, 
      {path: 'registro-form', component:RegistroFormComponent},
      {path: 'registro-form/:id', component:RegistroFormComponent},
      {path: 'registro-list', component:RegistroListComponent}, 
      {path: 'dashboard', component:DashboardComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
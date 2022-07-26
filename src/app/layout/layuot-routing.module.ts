import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoComponent } from '../feature/permiso/form/permiso.component';
import { PermisoListComponent } from '../feature/permiso/list/permiso-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'permiso-form', component:PermisoComponent}, 
      {path: 'dashboard', component:DashboardComponent},
      {path: 'permiso-list', component:PermisoListComponent}, 
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayuotRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroFormComponent } from '../feature/registro/form/registro.form.component';
import { RegistroListComponent } from '../feature/registro/list/registro-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
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

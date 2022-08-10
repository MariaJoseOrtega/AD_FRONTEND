import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolFormComponent } from '../feature/rol/form/rol-form.component';
import { RolListComponent } from '../feature/rol/list/rol-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component:MainComponent ,
    children: [
      {path: '', component:DashboardComponent},
      {path: 'rol-form', component:RolFormComponent},
      {path: 'rol-form/:id', component:RolFormComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path: 'rol-list', component:RolListComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

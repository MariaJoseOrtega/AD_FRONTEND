import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolComponent } from './rol/rol.component';

const routes: Routes = [
  {path: 'rol', component:RolComponent},
  {path: 'rol/:id', component:RolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

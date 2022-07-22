import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolComponent } from './feature/rol/rol.component';
import { RegistroComponent } from './feature/registro/form/registro.form.component';

const routes: Routes = [
  {path: 'registro', component:RegistroComponent},
  {path: 'registro/:id', component:RegistroComponent},
  {path: '', redirectTo: '/layout', pathMatch: 'full'},
  {path: 'layout', loadChildren:() => import('./layout/layout.module').then(m => m.LayoutModule)},
  {path: 'feature', loadChildren:() => import('./feature/feature.module').then(m => m.FeatureModule)},
  {path: 'rol', component:RolComponent},
  {path: 'rol/:id', component:RolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

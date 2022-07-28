import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroFormComponent } from './registro/form/registro.form.component';
import { RolComponent } from './rol/rol.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { RegistroListComponent } from './registro/list/registro-list.component';
import { RegistroToolbarComponent } from './registro/toolbar/registro-toolbar.component';
import { ComentarioAgregarComponent } from './comentario/comentario_agregar/comentario-agregar.component';


@NgModule({
  declarations: [
    RegistroFormComponent,
    RegistroListComponent,
    RegistroToolbarComponent,
    ComentarioAgregarComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }

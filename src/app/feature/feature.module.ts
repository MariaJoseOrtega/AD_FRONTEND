import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroFormComponent } from './registro/form/registro.form.component';
import { RolComponent } from './rol/rol.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { RegistroListComponent } from './registro/list/registro-list.component';
import { RegistroToolbarComponent } from './registro/toolbar/registro-toolbar.component';


@NgModule({
  declarations: [
    RolComponent,
    RegistroFormComponent,
    RegistroListComponent,
    RegistroToolbarComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }

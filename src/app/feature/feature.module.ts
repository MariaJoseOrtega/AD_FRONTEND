import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PermisoFormComponent } from './permiso/form/permiso-form.component';
import { FormsModule } from '@angular/forms';
import { PermisoListComponent } from './permiso/list/permiso-list.component';
import { PermisoToolbarComponent } from './permiso/toolbar/permiso-toolbar.component';



@NgModule({
  declarations: [
    PermisoFormComponent,
    PermisoListComponent,
    PermisoToolbarComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }

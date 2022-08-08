import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RegisterFormComponent } from './register/form/register.form.component';
import { FormsModule } from '@angular/forms';
import { RegisterListComponent } from './register/list/register-list.component';
import { RegisterToolbarComponent } from './register/toolbar/register-toolbar.component';
import { PermisoComboboxComponent } from './permiso/permiso-combobox.component';
import { ComentSearchComponent } from './coment/coment-search/coment-search.component';



@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterListComponent,
    RegisterToolbarComponent,
    PermisoComboboxComponent,
    ComentSearchComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }

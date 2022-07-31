import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { PermisoFormComponent } from './permiso/form/permiso-form.component';
import { FormsModule } from '@angular/forms';
import { PermisoListComponent } from './permiso/list/permiso-list.component';
import { PermisoToolbarComponent } from './permiso/toolbar/permiso-toolbar.component';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';


@NgModule({
  declarations: [
    PermisoFormComponent,
    PermisoListComponent,
    PermisoToolbarComponent,
    PersonComboboxComponent,
    AuthoritySearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }

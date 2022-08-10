
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RolFormComponent } from './rol/form/rol-form.component';
import { FormsModule } from '@angular/forms';
import { RolListComponent } from './rol/list/rol-list.component';
import { RolToolbarComponent } from './rol/toolbar/rol-toolbar.component';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';

@NgModule({
  declarations: [
    RolFormComponent,
    RolListComponent,
    RolToolbarComponent,
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

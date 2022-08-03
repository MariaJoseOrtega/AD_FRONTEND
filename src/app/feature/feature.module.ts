import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { RegisterFormComponent } from './feature/register/form/register.form.component';
import { FormsModule } from '@angular/forms';
import { RegisterListComponent } from './register/list/register-list.component';
import { RegisterToolbarComponent } from './feature/register/toolbar/register-toolbar.component';
import { CityComboboxComponent } from './city/city-combobox.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';


@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterListComponent,
    RegisterToolbarComponent,
    CityComboboxComponent,
    AuthoritySearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';

//Tipo_permiso
import { PermisoFormComponent } from './permiso/form/permiso-form.component';
import { PermisoListComponent } from './permiso/list/permiso-list.component';
import { PermisoToolbarComponent } from './permiso/toolbar/permiso-toolbar.component';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';
import { AuthoritySearchComponent } from './authority/authority-search/authority-search.component';

//Registro_actividad
import { RegistroFormComponent } from './registro/form/registro.form.component';
import { RegistroListComponent } from './registro/list/registro-list.component';
import { RegistroToolbarComponent } from './registro/toolbar/registro-toolbar.component';
import { ComentarioAgregarComponent } from './comentario/comentario_agregar/comentario-agregar.component';

//Rol
import { RolComponent } from './rol/rol.component';


@NgModule({
  declarations: [
    PermisoFormComponent,
    PermisoListComponent,
    PermisoToolbarComponent,
    PersonComboboxComponent,
    AuthoritySearchComponent,
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

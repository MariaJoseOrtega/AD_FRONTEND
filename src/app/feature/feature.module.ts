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
import { RegisterSearchComponent } from './register/register-search/register-search.component';

//Registro_actividad
import { RegistroFormComponent } from './registro/form/registro.form.component';
import { RegistroListComponent } from './registro/list/registro-list.component';
import { RegistroToolbarComponent } from './registro/toolbar/registro-toolbar.component';
import { ComentarioAgregarComponent } from './comentario/comentario_agregar/comentario-agregar.component';

//Rol
import { RolComponent } from './rol/form//rol.component';
import { MigasPanWebComponent } from './rol/migas-pan-web/migas-pan-web.component';
import { ConsultarRolesComponent } from './rol/consultar-roles/consultar-roles.component';
import { BuscarRolComponent } from './rol/buscar-rol/buscar-rol.component';

//Registro_Permiso
import { RegisterFormComponent } from './register/form/register.form.component';
import { RegisterListComponent } from './register/list/register-list.component';
import { RegisterToolbarComponent } from './register/toolbar/register-toolbar.component';
import { ComentSearchComponent } from './coment/coment-search/coment-search.component';
import { PermisoComboboxComponent } from './permiso/permiso-combobox/permiso-combobox.component';

//Persona
import { PersonToolbarComponent } from './person/toolbar/person-toolbar.component';
import { PersonListComponent } from './person/list/person-list.component';
import { ListComponent } from './rol/list/list.component';
import { RolComboboxComponent } from './rol/rol-combobox/rol-combobox.component';
import { ToolbarComponent } from './rol/toolbar/toolbar.component';



@NgModule({
  declarations: [
    PermisoFormComponent,
    PermisoListComponent,
    PermisoToolbarComponent,
    PersonComboboxComponent,
    AuthoritySearchComponent,
    RegisterSearchComponent,
    RegistroFormComponent,
    RegistroListComponent,
    RegistroToolbarComponent,
    ComentarioAgregarComponent,
    RolComponent,
    MigasPanWebComponent,
    ConsultarRolesComponent,
    BuscarRolComponent,
    RegisterFormComponent,
    RegisterListComponent,
    RegisterToolbarComponent,
    ComentSearchComponent,
    PermisoComboboxComponent,
    PersonToolbarComponent,
    PersonListComponent,
    ListComponent,
    RolComboboxComponent,
    ToolbarComponent,
  ],
  imports: [
   CommonModule,
   FeatureRoutingModule,
   FormsModule
  ]
})
export class FeatureModule { }

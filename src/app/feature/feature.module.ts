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
import { RolComponent } from './rol/form//rol.component';
import { MigasPanWebComponent } from './rol/migas-pan-web/migas-pan-web.component';
import { ConsultarRolesComponent } from './rol/consultar-roles/consultar-roles.component';
import { BuscarRolComponent } from './rol/buscar-rol/buscar-rol.component';
import { MenuComponent } from './rol/menu/menu.component';


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
    RolComponent,
    MigasPanWebComponent,
    ConsultarRolesComponent,
    BuscarRolComponent,
    MenuComponent
  ],
  imports: [
   CommonModule,
   FeatureRoutingModule,
   FormsModule
  ]
})
export class FeatureModule { }

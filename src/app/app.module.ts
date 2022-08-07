import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolComponent } from './rol/rol.component';
import { HttpClientModule } from '@angular/common/http';
import { RolesComponent } from './roles/roles.component';
import { RolesService } from './servicios/rest/roles.service';
import { MigasPanWebComponent } from './componentes/migas-pan-web/migas-pan-web.component';
import { ConsultarRolesComponent } from './consultar-roles/consultar-roles.component';
import { BuscarRolComponent } from './buscar-rol/buscar-rol.component';
@NgModule({
  declarations: [
    AppComponent,
    RolComponent,
    RolesComponent,
    MigasPanWebComponent,
    ConsultarRolesComponent,
    BuscarRolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RolesService, MigasPanWebComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

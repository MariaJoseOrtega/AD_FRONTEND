import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { MainComponent } from '../layout/main/main.component';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';
import { LayuotRoutingModule } from './layuot-routing.module';




@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LayuotRoutingModule
  ]
})
export class LayuotModule { }

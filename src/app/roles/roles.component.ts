import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MigasPanWebComponent } from '../componentes/migas-pan-web/migas-pan-web.component';
import { migasInterface } from '../interfaces/migas.interface';
import { RolInterface } from '../interfaces/rol.interface';
import { RolesService } from '../servicios/rest/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  rutas:migasInterface[] = [
    {
      ruta:"Roles",
      descripcion:"Inicio Roles"
    }
  ];
  Roles:any= [];

  constructor(
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  irConsulta(){
    this._router.navigate(['/consultar']);
  }


}

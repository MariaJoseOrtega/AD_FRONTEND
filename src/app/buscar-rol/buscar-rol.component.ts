import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { migasInterface } from '../interfaces/migas.interface';
import { RolInterface } from '../interfaces/rol.interface';
import { RolesService } from '../servicios/rest/roles.service';

@Component({
  selector: 'app-buscar-rol',
  templateUrl: './buscar-rol.component.html',
  styleUrls: ['./buscar-rol.component.css']
})
export class BuscarRolComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  listDeliciousDishes:any = [];
  listFiltered:any = [];
  txtBuscar:string="";
  tiposBusqueda:any = [
    {
      valor:1,
      texto:"Rol id"
    },
    {
      valor:2,
      texto:"Nombre"
    },
]
Buscadaseleccionada:string="2";

  rutas:migasInterface[] = [
    {
      ruta:"Roles",
      descripcion:"Inicio Roles"
    },
    {
      ruta:"consultar",
      descripcion:"Consultar Roles"
    },
    {
      ruta:"buscar",
      descripcion:"Buscar Rol"
    }
  ];
  Roles:any= [];
  antiguo:any = [];
  constructor(
    private readonly _srvRoles:RolesService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    this._srvRoles.consultarRoles().subscribe(roles=>{
      this.listDeliciousDishes = roles;
      this.listFiltered = this.listDeliciousDishes;
      this.filterList();
    })
  }
  mutarFecha(fecha:string){
    return fecha.split("T")[0];
  }

  filterList(): void {
    this.searchTerm$.subscribe(term => {

      switch(this.Buscadaseleccionada)
      {
        case "1":
          {           
            this.listFiltered = this.listDeliciousDishes
            .filter((item: RolInterface) => (item.rolId === +term));
            break;
          }
        case "2":
          {
            this.listFiltered = this.listDeliciousDishes
            .filter((item: RolInterface) => item.name!.toLowerCase().indexOf(term.toLowerCase()) >= 0);
            break;
          }
      }
    });
  }
}

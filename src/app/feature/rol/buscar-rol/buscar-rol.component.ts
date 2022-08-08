import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { migasInterface, Rol } from '../rol';
import { RolService } from '../rol.service';

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
      ruta:"/layout/menu",
      descripcion:"Inicio Roles"
    },
    {
      ruta:"/layout/consultar",
      descripcion:"Consultar Roles"
    },
    {
      ruta:"/layout/buscar",
      descripcion:"Buscar Rol"
    }
  ];
  Roles:any= [];
  antiguo:any = [];
  constructor(
    private readonly rolService: RolService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    this.rolService.consultarRoles().subscribe(roles=>{
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
            .filter((item: Rol) => (item.rolId === +term));
            break;
          }
        case "2":
          {
            this.listFiltered = this.listDeliciousDishes
            .filter((item: Rol) => item.name!.toLowerCase().indexOf(term.toLowerCase()) >= 0);
            break;
          }
      }
    });
  }
}

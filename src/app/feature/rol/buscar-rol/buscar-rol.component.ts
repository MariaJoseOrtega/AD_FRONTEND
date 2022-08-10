import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { migasInterface, Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-buscar-rol',
  templateUrl: './buscar-rol.component.html',
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
      ruta:"/layout/buscar",
      descripcion:"Rol"
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
    try{
      return fecha.split("T")[0];
    }catch(err){
      return fecha;
    }
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

  
  irActualizarRol(id:string){
    console.log(id);
    
    this._router.navigate(['/layout/rol/'+id]);
  }
  irNuevoRol(){
    this._router.navigate(['layout','rol']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { migasInterface, Persona } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
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
    this.rolService.consultarPersonas().subscribe(personas=>{
      this.listDeliciousDishes = personas;
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
        
        case "2":
          {
            this.listFiltered = this.listDeliciousDishes
            .filter((item: Persona) => item.name!.toLowerCase().indexOf(term.toLowerCase()) >= 0);
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

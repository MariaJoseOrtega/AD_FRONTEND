import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { migasInterface, Persona } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
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
      ruta:"/layout/persona",
      descripcion:"Persona"
    }
  ];
  Roles:any= [];
  antiguo:any = [];
  constructor(
    private readonly personaService: PersonService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    this.personaService.findAll().subscribe(personas=>{
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


}

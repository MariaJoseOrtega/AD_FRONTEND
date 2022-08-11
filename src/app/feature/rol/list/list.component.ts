import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { migasInterface, Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  listaRoles:any = [];
  rutas:migasInterface[] = [
    {
      ruta:"/layout/rol-list",
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
    this.rolService.consultarRoles().subscribe(lista=>{
      this.listaRoles = lista;
    })
  }
  mutarFecha(fecha:string){
    try{
      return fecha.split("T")[0];
    }catch(err){
      return fecha;
    }
  }

  obtenerListaFiltrada(lista:any){
    this.listaRoles = lista;
  }

  irActualizarRol(id:string){
    console.log(id);
    
    this._router.navigate(['/layout/rol/'+id]);
  }
  irNuevoRol(){
    this._router.navigate(['layout','rol']);
  }

  setRoles(lista:any){
      this.listaRoles = lista;
  }

}



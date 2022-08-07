import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { migasInterface } from '../interfaces/migas.interface';
import { RolesService } from '../servicios/rest/roles.service';

@Component({
  selector: 'app-consultar-roles',
  templateUrl: './consultar-roles.component.html',
  styleUrls: ['./consultar-roles.component.css']
})
export class ConsultarRolesComponent implements OnInit {
  rutas:migasInterface[] = [
    {
      ruta:"Roles",
      descripcion:"Inicio Roles"
    },
    {
      ruta:"consultar",
      descripcion:"Consultar Roles"
    }
  ];
  candidatoEliminar:string="";

  Roles:any= [];
  constructor(
    private readonly _srvRoles:RolesService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    this._srvRoles.consultarRoles().subscribe(roles=>{
      this.Roles = roles;
    })
  }

  seleciconarEliminar(id:string){
    this.candidatoEliminar = id;
  }

  deleteById():void{    
    this._srvRoles.eliminarRol(this.candidatoEliminar).subscribe(
      () => {
        window.location.reload();
        console.log("Registro Borrado exitosamente");
        //redireccionar ....
      }
    )
  }

  mutarFecha(fecha:string){
    return fecha.split("T")[0];
  }


  irNuevoRol(){
    this._router.navigate(['rol']);
  }

  irActualizarRol(id:string){
    console.log(id);
    
    this._router.navigate([`rol/${id}`]);
  }

  irBuscar(){
    this._router.navigate(['buscar']);
  }

}

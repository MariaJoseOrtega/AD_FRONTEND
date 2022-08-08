import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { migasInterface } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-consultar-roles',
  templateUrl: './consultar-roles.component.html'
})
export class ConsultarRolesComponent implements OnInit {
  rutas:migasInterface[] = [
    {
      ruta:"/layout/menu",
      descripcion:"Inicio Roles"
    },
    {
      ruta:"/layout/consultar",
      descripcion:"Consultar Roles"
    }
  ];
  candidatoEliminar:string="";

  Roles:any= [];
  constructor(
    private readonly rolService: RolService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
    this.rolService.consultarRoles().subscribe(roles=>{
      this.Roles = roles;
    })
  }

  seleciconarEliminar(id:string){
    this.candidatoEliminar = id;
  }

  deleteById():void{    
    this.rolService.deleteById(this.candidatoEliminar).subscribe(
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
    this._router.navigate(['layout','rol']);
  }

  irActualizarRol(id:string){
    console.log(id);
    
    this._router.navigate(['/layout/rol/'+id]);
  }

  irBuscar(){
    this._router.navigate(['layout','buscar']);
  }

}

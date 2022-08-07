import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolInterface } from 'src/app/interfaces/rol.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  
  //Ruta parametrisada de las consultas HTTP
  private path:string = `${environment.host}:${environment.port}`;
  private segmento = "/api/rol/";
  constructor(
    private readonly _http: HttpClient
  ) { }

  //Servicios para consumir SpringBoot
  //consultar todos los Roles
  consultarRoles(){
    const uri = `${this.path}${this.segmento}all`;
    return this._http.get(uri);
  }
  //Consultar Rol por Id
  consultarRolxId(id:string){
    const uri = `${this.path}${this.segmento}${id}`;
    return this._http.get(uri);
  }

  //Guardar Rol
  crearRol(Rol:RolInterface){
    const uri = `${this.path}${this.segmento}save`;
    return this._http.post(uri,Rol);
  }

  //Actualizar Rol
  actualizarRol(Rol:RolInterface){
    const uri = `${this.path}${this.segmento}update`;
    return this._http.put(uri,Rol);
  }

  //Elimar Rol
  eliminarRol(id:string){
    
    const uri = `${this.path}${this.segmento}deleteById/${id}`;
    
    console.log(uri);
    return this._http.delete(uri);
  }

  
}

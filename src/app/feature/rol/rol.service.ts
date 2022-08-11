import { Injectable } from '@angular/core';
import { Persona, Rol, RolAuthority } from './rol';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/rol";
  private url2: string = "http://localhost:8080/api/rolauthority";


  public consultarRoles(){
    return this.http.get<Rol[]>(this.url+"/all",this.httpOptions);
  }
  
  public save(rol: Rol): Observable<Rol>{
    return this.http.post<Rol>(this.url+"/save", rol, this.httpOptions);
  }

  public findById(id: number): Observable<Rol>{
    return this.http.get<Rol>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number | string): Observable<Rol>{
    return this.http.delete<Rol>(this.url+"/deleteById/"+id, this.httpOptions);
  }
  
  public actualizarRol(Rol:Rol){
    return this.http.put(this.url+"/update",Rol, this.httpOptions);
  }


  //rol x authority
  public consultarPermisos(){
    return this.http.get<RolAuthority[]>(this.url2+"/all",this.httpOptions);
  }

  public saveoRolxAuthority(rol: RolAuthority): Observable<RolAuthority>{
    return this.http.post<RolAuthority>(this.url2+"/save", rol, this.httpOptions);
  }

  public findByIdRolxAuthority(id: number): Observable<RolAuthority>{
    return this.http.get<RolAuthority>(this.url2+"/"+id, this.httpOptions);
  }

  public deleteByIdRolxAuthority(id: number | string): Observable<RolAuthority>{
    return this.http.delete<RolAuthority>(this.url2+"/deleteById/"+id, this.httpOptions);
  }
  
  public actualizarRolRolxAuthority(Rol:RolAuthority){
    return this.http.put(this.url2+"/update",Rol, this.httpOptions);
  }

  
}

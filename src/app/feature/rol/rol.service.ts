import { Injectable } from '@angular/core';
import { Persona, Rol } from './rol';
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
  private url2: string = "http://localhost:8080/api/person";


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
  
  public consultarPersonas(){
    return this.http.get<Persona[]>(this.url2+"/findAll",this.httpOptions);
  }

}

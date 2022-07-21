import { Injectable } from '@angular/core';
import { Rol } from './rol';
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

  public save(rol: Rol): Observable<Rol>{
    return this.http.post<Rol>(this.url+"/save", rol, this.httpOptions);
  }

  public findById(id: number): Observable<Rol>{
    return this.http.get<Rol>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Rol>{
    return this.http.delete<Rol>(this.url+"/deleteById/"+id, this.httpOptions);
  }

}

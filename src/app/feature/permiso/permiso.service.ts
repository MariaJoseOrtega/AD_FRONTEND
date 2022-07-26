import { Injectable } from '@angular/core';
import { Permiso } from './permiso';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/permiso"; //backend

  public save(permiso: Permiso): Observable<Permiso>{
    return this.http.post<Permiso>(this.url+"/save", permiso, this.httpOptions);
  }

  public findById(id: number): Observable<Permiso>{
    return this.http.get<Permiso>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Permiso>{
    return this.http.delete<Permiso>(this.url+"/deleteById/"+id, this.httpOptions);
  }

}

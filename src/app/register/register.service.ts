import { Injectable } from '@angular/core';
import { Register } from './register';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/register";

  public save(person: Register): Observable<Register>{
    return this.http.post<Register>(this.url+"/save", person, this.httpOptions);
  }

  public findById(id: number): Observable<Register>{
    return this.http.get<Register>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Register>{
    return this.http.delete<Register>(this.url+"/deleteById/"+id, this.httpOptions);
  }

}

import { Injectable } from '@angular/core';
import { Register } from './register';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  findByName(term: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/register";

  public save(register: Register): Observable<Register>{
    return this.http.post<Register>(this.url+"/save", register, this.httpOptions);
  }

  public findById(id: number): Observable<Register>{
    return this.http.get<Register>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Register>{
    return this.http.delete<Register>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Register[]>{
    return this.http.get<Register[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByDetalle(term: string):  Observable<Register[]>{
    return this.http.get<Register[]>(this.url+"/findByDetalle/"+term, this.httpOptions)
  }
}

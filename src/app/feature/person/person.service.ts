import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/person";

  public save(person: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.url+"/save", person, this.httpOptions);
  }

  public findById(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.url+"/findById"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Persona>{
    return this.http.delete<Persona>(this.url+"/deleteById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url+"/findByName/"+term, this.httpOptions)
  }  

}

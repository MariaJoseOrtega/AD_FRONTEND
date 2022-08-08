import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coment } from './coment';


@Injectable({
  providedIn: 'root'
})
export class ComentService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/coment" //backend

  public findById(id: number): Observable <Coment> {
    return this.http.get<Coment>(this.url +"/findById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Coment[]>{
    return this.http.get<Coment[]>(this.url+"/findAll", this.httpOptions);
  }
  public findByName(term: string): Observable<Coment[]>{
    return this.http.get<Coment[]>(this.url+"/findByName/"+term, this.httpOptions);
  }
}

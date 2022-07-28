import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/comentario";


  public findById(id: number): Observable<Comentario>{
    return this.http.get<Comentario>(this.url+"/findById/"+id, this.httpOptions);
  }

  public findAll(): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByComentario(term: string): Observable<Comentario[]>{
    return this.http.get<Comentario[]>(this.url+"/findByComentario/"+term, this.httpOptions);
  }
  
}

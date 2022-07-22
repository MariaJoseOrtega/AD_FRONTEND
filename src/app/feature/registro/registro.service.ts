import { Injectable } from '@angular/core';
import { Registro } from './registro';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json" })
  }

  private url: string = "http://localhost:8080/api/registro";

  public save(registro: Registro): Observable<Registro>{
    return this.http.post<Registro>(this.url+"/save", registro, this.httpOptions);
  }
  public findById(id: number): Observable<Registro>{
    return this.http.get<Registro>(this.url+"/"+id,this.httpOptions);
  }
  public deleteById(id: number): Observable<Registro>{
    return this.http.delete<Registro>(this.url+"/deleteById/"+id,this.httpOptions);
  }

  public findAll(): Observable<Registro[]>{
    return this.http.get<Registro[]>(this.url+"/findAll", this.httpOptions);
  }

  public findByName(term: string): Observable<Registro[]>{
    return this.http.get<Registro[]>(this.url+"/findByName/"+term, this.httpOptions)
  }


}

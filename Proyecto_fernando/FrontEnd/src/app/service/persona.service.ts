import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://bkdfernando.herokuapp.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  } 

  /*public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', educacion);
  }*/

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }

  /*public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }*/
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contato } from './contato/contato';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  url: string = 'http://localhost:8080/api/contatos';

  constructor(
    private http: HttpClient
  ) { }

  save(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.url, contato);
  }

  list() : Observable<Contato[]> {
    return this.http.get<any>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Login } from '../entrar/entrar';
import { Endereco } from '../endereco/endereco';
import { Mercado } from '../mercado/mercado';
import { Sessao } from '../sessao/sessao';

@Injectable()
export class MercadoService {

  constructor(private http: Http) { }

  public limpaSessoes(): Observable<string> {
    var Url = 'api/sessao/clearSessoes';
    var result =  this.http.get(`${Url}`)
      .map((res: Response) => res.text());
    return result;
  }

  public deleteSessao(id: number): Observable<string> {
    var Url = 'api/sessao/deleteById?id=';
    var result =  this.http.get(`${Url+id}`)
      .map((res: Response) => res.text());
    return result;
  }

  public updateSessao(id: number): Observable<string> {
    var Url = 'api/sessao/update?id=';
    var result =  this.http.get(`${Url+id}`)
      .map((res: Response) => res.text());
    return result;
  }

  public carregaSessao(id: number): Observable<Sessao> {
    var Url = 'api/sessao/findById?id=';
    var result =  this.http.get(`${Url+id}`)
      .map((res: Response) => res.json());
    return result;
  }

  public carregaLogin(id: number): Observable<Login> {
    var Url = 'api/login/findById?id=';
    var result =  this.http.get(`${Url+id}`)
      .map((res: Response) => res.json());
    return result;
  }

  public carregaMercado(id: number): Observable<Mercado> {
    var Url = 'api/mercado/findByIdLogin?id_login=';
    var result =  this.http.get(`${Url+id}`)
      .map((res: Response) => res.json());
    return result;
  }

  public carregaEndereco(id: number): Observable<Endereco> {
    var Url = 'api/endereco/findById?id=';
    var result =  this.http.get(`${Url+id}`)
      .map((res: Response) => res.json());
    return result;
  }
}

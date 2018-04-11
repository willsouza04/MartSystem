import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Login } from '../entrar/entrar';
import { Endereco } from '../endereco/endereco';
import { Mercado } from '../mercado/mercado';
import { Usuario } from '../usuario/usuario';

@Injectable()
export class CadastrarService {

  constructor(private http: Http) { }

  public addMercado(mercado: Mercado, loginAtual: Login, endereco: Endereco): Observable<string> {
    var Url = 'api/mercado/save?';
    Url += 'id_login=' + loginAtual.id + '&';
    Url += 'id_endereco=' + endereco.id + '&';
    Url += 'cnpj=' + mercado.cnpj + '&';
    Url += 'nome=' + mercado.nome;
    var result = this.http.get(`${Url}`)
      .map((res: Response) => res.toString());
    return result;
  }

  public addUsuario(usuario: Usuario, loginAtual: Login, endereco: Endereco): Observable<string> {
    var Url = 'api/usuario/save?';
    Url += 'id_login=' + loginAtual.id + '&';
    Url += 'id_endereco=' + endereco.id + '&';
    Url += 'nome=' + usuario.nome + '&';
    Url += 'cpf=' + usuario.cpf + '&';
    Url += 'idade=' + usuario.idade;
    var result = this.http.get(`${Url}`)
      .map((res: Response) => res.toString());
    return result;
  }

  public addLogin(loginAtual: Login): Observable<string> {
    var Url = 'api/login/save?';
    Url += 'usuario=' + loginAtual.username + '&';
    Url += 'senha=' + loginAtual.senha + '&';
    Url += 'tipo=' + loginAtual.tipo;
    var result = this.http.get(`${Url}`)
      .map((res: Response) => res.toString());
    return result;
  }

  public addEndereco(endereco: Endereco): Observable<string> {
    var Url = 'api/endereco/save?';
    Url += 'cep=' + endereco.cep + '&';
    Url += 'numero=' + endereco.numero + '&';
    Url += 'rua=' + endereco.rua + '&';
    Url += 'cidade=' + endereco.cidade + '&';
    Url += 'estado=' + endereco.estado + '&';
    Url += 'pais=' + endereco.pais;
    var result = this.http.get(`${Url}`)
      .map((res: Response) => res.toString());
    return result;
  }

  public removerLogin(id: number): Observable<string>{
    var urlRemove = 'api/login/deleteById?id='+id;
    var result =  this.http.get(`${urlRemove}`)
      .map((res: Response) => res.toString());
    return result;
  }

  public removerEndereco(id: number): Observable<string>{
    var urlRemove = 'api/endereco/deleteById?id='+id;
    var result =  this.http.get(`${urlRemove}`)
      .map((res: Response) => res.toString());
    return result;
  }
}

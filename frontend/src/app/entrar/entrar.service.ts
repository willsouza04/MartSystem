import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Login } from './entrar';

@Injectable()
export class EntrarService {

		constructor(private http: Http) { }
		
		public findLoginByUsernameAndPassword(loginAtual: Login): Observable<Login> {
			var Url = 'api/login/findLoginByUsernameAndPassword?';
			Url += 'username=' + loginAtual.username + '&';
			Url += 'senha=' + loginAtual.senha;
			var result = this.http.get(`${Url}`)
			  .map((res: Response) => res.json());
			return result;
	  }
}
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EntrarService {
		
		constructor(private http: Http) { }
		
		//Arrumar
		public findTipoByLogin(username: string, senha: string): Observable<string> {
			var Url = 'http://localhost:4200/api/login/findTipoByLogin?';
			Url += 'username=' + username + '&';
			Url += 'senha=' + senha;
			var result = this.http.get(`${Url}`)
			  .map((res: Response) => res.toString());
			return result;
	  }
}
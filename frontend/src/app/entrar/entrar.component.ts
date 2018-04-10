import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrarService } from './entrar.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

	public id_login = 0;
	public username = '';
	public senha = '';
	public tipo = '';
	
	constructor(
		private router: Router,
		private entrarService: EntrarService
	) { }

	ngOnInit() {
		
	}
	
	public login(){
		this.entrarService.findTipoByLogin(this.username, this.senha)
			.subscribe(res => {
				console.log(res);
			  }, err => {
				console.log("Error");
			  }
		);		
	}
}

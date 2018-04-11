import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrarService } from './entrar.service';

import { Login } from './entrar';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  public loginAtual = new Login();

	constructor(
		private router: Router,
		private entrarService: EntrarService
	) { }

	ngOnInit() {
    this.resetLogin();
	}
  public resetLogin(){
    this.FecharErroLogin();
    this.loginAtual.id = 0;
  	this.loginAtual.username = '';
  	this.loginAtual.senha = '';
  	this.loginAtual.tipo = '';
  }

	public login(){
		this.entrarService.findLoginByUsernameAndPassword(this.loginAtual)
			.subscribe(res => {
          this.FecharErroLogin();
          this.loginAtual = res;
          if(this.loginAtual.tipo == 'mercado'){
            window.location.href = '/mercado/' + this.loginAtual.id;
          }
          else {
            window.location.href = '/usuario/' + this.loginAtual.id;
          }
			  }, err => {
          this.resetLogin();
          this.AbrirErroLogin();
			  }
		);
	}

  public direcionar(){

  }

  public AbrirErroLogin(){
    document.getElementById("error").style.display = 'block';
  }

  public FecharErroLogin(){
    document.getElementById("error").style.display = 'none';
  }
}

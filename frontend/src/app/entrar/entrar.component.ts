import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrarService } from './entrar.service';

import { Login } from './entrar';
import { Sessao } from '../sessao/sessao'

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  public loginAtual = new Login();
  public sessao = new Sessao();

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
          this.FecharErroLoginTimeout();
          this.loginAtual = res;
          this.addSessao();
			  }, err => {
          if(err.statusText == "Gateway Timeout"){
            this.resetLogin();
            this.AbrirErroLoginTimeout();
          }else{
            this.resetLogin();
            this.AbrirErroLogin();
          }
			  }
		);
	}

  public addSessao(){
    this.entrarService.addSessao(this.loginAtual)
      .subscribe(res => {
        this.sessao = res;
        if(this.loginAtual.tipo == 'mercado'){
          window.location.href = '/mercado/' + this.sessao.id;
        }
        else {
          window.location.href = '/usuario/' + this.sessao.id;
        }
      }, err => {
        this.resetLogin();
        this.AbrirErroLogin();
      }
    );
  }

  public AbrirErroLogin(){
    document.getElementById("error").style.display = 'block';
  }

  public FecharErroLogin(){
    document.getElementById("error").style.display = 'none';
  }

  public AbrirErroLoginTimeout(){
    document.getElementById("errorTimeout").style.display = 'block';
  }

  public FecharErroLoginTimeout(){
    document.getElementById("errorTimeout").style.display = 'none';
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public testmercado(){
	  document.getElementById("login-form").style.display = 'block';
	  document.getElementById("register-form").style.display = 'none';
	  document.getElementById("register-form-link").className = 'active';
	  document.getElementById("login-form-link").className = '';
  }
  
  public testusuario(){
	  document.getElementById("login-form").style.display = 'none';
	  document.getElementById("register-form").style.display = 'block';
	  document.getElementById("register-form-link").className = '';
	  document.getElementById("login-form-link").className = 'active';
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrarService } from './cadastrar.service';

import { Login } from '../entrar/entrar';
import { Endereco } from '../endereco/endereco';
import { Mercado } from '../mercado/mercado';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  public loginAtual = new Login();
  public endereco = new Endereco();
  public mercado = new Mercado();
  public usuario = new Usuario();

  public idadeUsuario = '';
  public numeroEndereco = '';

  constructor(
		private router: Router,
    private cadastrarService: CadastrarService
  ) { }

  ngOnInit() {
    this.loginAtual.tipo = 'mercado';
    this.FecharErroCampos();
    this.FecharErroUserName();
  }

  public continuar(){
    if (this.loginAtual.tipo == 'mercado'){
      if(((this.mercado.nome == null) || (this.mercado.nome == '')) ||
          ((this.loginAtual.username == null) || (this.loginAtual.username == '')) ||
          ((this.loginAtual.senha == null) || (this.loginAtual.senha == '')) ||
          ((this.mercado.cnpj == null) || (this.mercado.cnpj == ''))){
        this.AbrirErroCampos();
      }
      else{
        this.FecharErroCampos();
        if(this.verificarUsername()){
          this.AbrirErroUserName();
        }
        else{
          this.FecharErroUserName();
          this.abrirCadastroEndereco();
        }
      }
    }
    else if (this.loginAtual.tipo == 'usuario'){
      if(((this.usuario.nome == null) || (this.usuario.nome == '')) ||
          ((this.loginAtual.username == null) || (this.loginAtual.username == '')) ||
          ((this.loginAtual.senha == null) || (this.loginAtual.senha == '')) ||
          ((this.usuario.cpf == null) || (this.usuario.cpf == '')) ||
          ((this.idadeUsuario == null) || (this.idadeUsuario == ''))){
        this.AbrirErroCampos();
      }
      else{
        this.FecharErroCampos();
        if(this.verificarUsername()){
          this.AbrirErroUserName();
        }
        else{
          this.FecharErroUserName();
          try {
              this.usuario.idade = parseInt(this.idadeUsuario);
              this.FecharErroIdade();
              if(this.usuario.idade > 16 && this.usuario.idade < 120){
                console.log("Foi");
                this.abrirCadastroEndereco();
              }
              else{
                this.AbrirErroIdade();
              }
          } catch (e) {
              this.AbrirErroIdade();
          }
        }
      }
    }
  }

  public finalizar(){
    if(((this.endereco.cep == null) || (this.endereco.cep == '')) ||
        ((this.endereco.rua == null) || (this.endereco.rua == '')) ||
        ((this.endereco.cidade == null) || (this.endereco.cidade == '')) ||
        ((this.endereco.estado == null) || (this.endereco.estado == '')) ||
        ((this.endereco.pais == null) || (this.endereco.pais == '')) ||
        ((this.numeroEndereco == null) || (this.numeroEndereco == ''))){
          this.AbrirErroCampos();
        }
        else{
          this.FecharErroCampos();
          try {
              this.endereco.numero = parseInt(this.numeroEndereco);
              if(this.endereco.numero > 0){
                this.FecharErroNumero();
                this.finalizarCadastro();
              }
              else{
                this.AbrirErroNumero();
              }
          } catch (e) {
              this.AbrirErroNumero();

        }
      }
  }

  public finalizarCadastro(){
    this.adicionarLogin();
  }

  public adicionarLogin(){
    this.cadastrarService.addLogin(this.loginAtual)
    .subscribe(res => {		
		//carregar id do login com res
        this.adicionarEndereco();
      }, err => {}
    );
  }

  public adicionarEndereco(){
    this.cadastrarService.addEndereco(this.endereco)
    .subscribe(res => {
		//carregar id do endereco com res
        if(this.loginAtual.tipo == 'mercado'){
          this.adicionarMercado();
        }
        else{
          this.adicionarUsuario();
        }
      }, err => {
        this.removerLogin();
      }
    );
  }

  public adicionarMercado(){
    this.cadastrarService.addMercado(this.mercado, this.loginAtual, this.mercado)
    .subscribe(res => {
        //success
      }, err => {
        this.removerEndereco();
      }
    );
  }

  public adicionarUsuario(){
    this.cadastrarService.addUsuario(this.usuario, this.loginAtual, this.mercado)
    .subscribe(res => {
        //success
      }, err => {
        this.removerEndereco();
      }
    );
  }

  public removerLogin(){
    //remover Login
  }

  public removerEndereco(){
    //remover Endereco
    this.removerLogin();
  }

  public verificarUsername(){
    //verificar usernames
    return false;
  }

  public abrirCadastroEndereco(){
    document.getElementById("cadastro-inicio").style.display = 'none';
	  document.getElementById("cadastro-endereco").style.display = 'block';
  }

  public voltar(){
    document.getElementById("cadastro-inicio").style.display = 'block';
	  document.getElementById("cadastro-endereco").style.display = 'none';
  }

  public limparCampoEndereco(){
    this.endereco.cep = '';
    this.endereco.rua = '';
    this.endereco.cidade = '';
    this.endereco.estado = '';
    this.endereco.pais = '';
    this.numeroEndereco = '';
  }

  public limparCamposLogin(){
    this.mercado.nome = '';
    this.mercado.cnpj = '';
    this.usuario.nome = '';
    this.usuario.cpf = '';
    this.idadeUsuario = '';
    this.loginAtual.username = '';
    this.loginAtual.senha = '';
  }

  public ativarMercado(){
    this.loginAtual.tipo = 'mercado';
	  document.getElementById("mercadoId").style.display = 'block';
	  document.getElementById("usuarioId").style.display = 'none';
	  document.getElementById("mercadoId-link").className = 'active';
	  document.getElementById("usuarioId-link").className = '';
    this.limparCamposLogin();
    this.limparCampoEndereco();
  }

  public ativarUsuario(){
    this.loginAtual.tipo = 'usuario';
	  document.getElementById("mercadoId").style.display = 'none';
	  document.getElementById("usuarioId").style.display = 'block';
	  document.getElementById("mercadoId-link").className = '';
	  document.getElementById("usuarioId-link").className = 'active';
    this.limparCamposLogin();
    this.limparCampoEndereco();
  }

  public AbrirErroCampos(){
    document.getElementById("errorCampos").style.display = 'block';
  }

  public FecharErroCampos(){
    document.getElementById("errorCampos").style.display = 'none';
  }

  public AbrirErroUserName(){
    document.getElementById("errorUserName").style.display = 'block';
  }

  public FecharErroUserName(){
    document.getElementById("errorUserName").style.display = 'none';
  }

  public AbrirErroIdade(){
    document.getElementById("errorIdade").style.display = 'block';
  }

  public FecharErroIdade(){
    document.getElementById("errorIdade").style.display = 'none';
  }

  public AbrirErroNumero(){
    document.getElementById("errorNumero").style.display = 'block';
  }

  public FecharErroNumero(){
    document.getElementById("errorNumero").style.display = 'none';
  }
}

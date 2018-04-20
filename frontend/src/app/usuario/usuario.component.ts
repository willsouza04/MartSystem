import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { UsuarioService } from './usuario.service';

import { Login } from '../entrar/entrar';
import { Endereco } from '../endereco/endereco';
import { Usuario } from '../usuario/usuario';
import { Sessao } from '../sessao/sessao';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public isCollapsed = false;
  public loginAtual = new Login();
  public endereco = new Endereco();
  public usuario = new Usuario();
  public sessao = new Sessao();

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.sessao.id = parseInt(this.router.url.split('/')[2]);
    this.limparSessoes();
  }

  public activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

  public limparSessoes(){
    this.usuarioService.limpaSessoes()
    .subscribe(res => {
      this.carregarSessao();
    }, err => {
      this.carregarSessao();
    });
  }

  public carregarSessao(){
    this.usuarioService.carregaSessao(this.sessao.id)
    .subscribe(res => {
      this.sessao = res;
      this.updateSessao();
    }, err => {
      window.location.href = '/error'
    });
  }

  public updateSessao(){
    this.usuarioService.updateSessao(this.sessao.id)
    .subscribe(res => {
      this.carregarLogin();
    }, err => {});
  }

  public carregarLogin(){
    this.usuarioService.carregaLogin(this.sessao.id_login)
    .subscribe(res => {
      this.loginAtual = res
      this.carregarUsuario();
    }, err => {
      console.log("Login")
      this.mostrarTela();
    });
  }

  public carregarUsuario(){
    this.usuarioService.carregaUsuario(this.loginAtual.id)
    .subscribe(res => {
      this.usuario = res;
      this.carregarEndereco();
    }, err => {
      console.log("Mercado")
      this.mostrarTela();
    });
  }

  public carregarEndereco(){
    this.usuarioService.carregaEndereco(this.usuario.id_endereco)
    .subscribe(res => {
      this.endereco = res;
      this.mostrarTela();
    }, err => {
      console.log("Endereco")
      this.mostrarTela();
    });
  }

  public mostrarTela(){
    document.getElementById("usuario").style.display = 'block';
    document.getElementById("loading").style.display = 'none';
  }
}

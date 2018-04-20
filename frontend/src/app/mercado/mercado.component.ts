import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { MercadoService } from './mercado.service';

import { Login } from '../entrar/entrar';
import { Endereco } from '../endereco/endereco';
import { Mercado } from '../mercado/mercado';
import { Sessao } from '../sessao/sessao';

@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css']
})
export class MercadoComponent implements OnInit {

  public isCollapsed = false;
  public loginAtual = new Login();
  public endereco = new Endereco();
  public mercado = new Mercado();
  public sessao = new Sessao();

  public image;

  constructor(
    private router: Router,
    private mercadoService: MercadoService
  ) { }

  ngOnInit() {
    this.sessao.id = parseInt(this.router.url.split('/')[2]);
    this.limparSessoes();
  }

  public activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

  public limparSessoes(){
    this.mercadoService.limpaSessoes()
    .subscribe(res => {
      this.carregarSessao();
    }, err => {
      this.carregarSessao();
    });
  }

  public carregarSessao(){
    this.mercadoService.carregaSessao(this.sessao.id)
    .subscribe(res => {
      this.sessao = res;
      this.updateSessao();
    }, err => {
      window.location.href = '/error'
    });
  }

  public updateSessao(){
    this.mercadoService.updateSessao(this.sessao.id)
    .subscribe(res => {
      this.carregarLogin();
    }, err => {});
  }

  public carregarLogin(){
    this.mercadoService.carregaLogin(this.sessao.id_login)
    .subscribe(res => {
      this.loginAtual = res
      this.carregarMercado();
    }, err => {
      console.log("Login")
      this.mostrarTela();
    });
  }

  public carregarMercado(){
    this.mercadoService.carregaMercado(this.loginAtual.id)
    .subscribe(res => {
      this.mercado = res;
      this.carregarEndereco();
    }, err => {
      console.log("Mercado")
      this.mostrarTela();
    });
  }

  public carregarEndereco(){
    this.mercadoService.carregaEndereco(this.mercado.id_endereco)
    .subscribe(res => {
      this.endereco = res;
      this.mostrarTela();
    }, err => {
      console.log("Endereco")
      this.mostrarTela();
    });
  }

  public mostrarTela(){
    document.getElementById("mercado").style.display = 'block';
    document.getElementById("loading").style.display = 'none';
  }
}

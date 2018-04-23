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

  public maps = "embed?pb=!1m18!1m12!1m3!1d3617!2d!3d!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x%3A0x3c1743665fcf6069!2sSuper+Muffato+Brasil!5e0!3m2!1spt-BR!2sbr!4v1524257303167";

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

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}

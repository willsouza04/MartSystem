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
  public data = new Date();

  public AllMonths: String[] = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  public Month: String[] = [];

  constructor(
    private router: Router,
    private mercadoService: MercadoService
  ) { }

  ngOnInit() {
    this.sessao.id = parseInt(this.router.url.split('/')[1]);
    this.limparSessoes();
	  this.carregarMeses();
    this.randomize();
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

  public carregarMeses(){
	  for(var i = 5; i >= 0 ; i--){
		  var mes = this.data.getMonth() - i;
		  if (mes < 0){
			  mes = 12 + mes
		  }
		  this.Month[5-i] = this.AllMonths[mes]
	  }
  }

  public lineChartData:Array<any> = [
    {data: [0, 0, 0, 0, 0, 0], label: 'Alimentos'},
    {data: [0, 0, 0, 0, 0, 0], label: 'Moradia'},
    {data: [0, 0, 0, 0, 0, 0], label: 'Higiene'}
  ];
  public lineChartLabels:Array<any> = this.Month;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // blue
      backgroundColor: 'rgba(120,140,220,0.2)',
      borderColor: 'rgba(120,140,220,1)',
      pointBackgroundColor: 'rgba(120,140,220,1)',
      pointBorderColor: '#fgf',
      pointHoverBackgroundColor: '#fgf',
      pointHoverBorderColor: 'rgba(120,140,220,0.8)'
    },
    { // green
      backgroundColor: 'rgba(120,220,140,0.2)',
      borderColor: 'rgba(120,220,140,1)',
      pointBackgroundColor: 'rgba(120,220,140,1)',
      pointBorderColor: '#ffg',
      pointHoverBackgroundColor: '#ffg',
      pointHoverBorderColor: 'rgba(120,220,140,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 1000) + 1);
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

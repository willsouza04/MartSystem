import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { MercadoService } from '../mercado/mercado.service';

@Component({
  selector: 'app-mercado-menu',
  templateUrl: './mercado-menu.component.html',
  styleUrls: ['./mercado-menu.component.css']
})
export class MercadoMenuComponent implements OnInit {

  public isCollapsed = false;
  public idSessao;

  constructor(
    private router: Router,
    private mercadoService: MercadoService
  ) {  }

  ngOnInit() {
    this.idSessao = parseInt(this.router.url.split('/')[2]);
  }

  public activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

  public encerrarSessao(){
    this.mercadoService.deleteSessao(this.idSessao)
    .subscribe(res => {
      window.location.href = '/inicio';
    }, err => {
      window.location.href = '/inicio';
    });
  }

}

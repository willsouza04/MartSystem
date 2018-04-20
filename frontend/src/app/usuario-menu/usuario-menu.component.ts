import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-usuario-menu',
  templateUrl: './usuario-menu.component.html',
  styleUrls: ['./usuario-menu.component.css']
})
export class UsuarioMenuComponent implements OnInit {

  public isCollapsed = false;
  public idSessao;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {  }

  ngOnInit() {
    this.idSessao = parseInt(this.router.url.split('/')[2]);
  }

  public activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

  public encerrarSessao(){
    this.usuarioService.deleteSessao(this.idSessao)
    .subscribe(res => {
      window.location.href = '/entrar';
    }, err => {
      window.location.href = '/entrar';
    });
  }
}

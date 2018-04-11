import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-mercado',
  templateUrl: './menu-mercado.component.html',
  styleUrls: ['./menu-mercado.component.css']
})
export class MenuMercadoComponent implements OnInit {

  public isCollapsed = false;

  constructor(
    private router: Router
  ) {  }

  ngOnInit() {}

  public activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

}

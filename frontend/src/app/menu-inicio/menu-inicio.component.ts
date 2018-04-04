import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent implements OnInit {

  public isCollapsed = false;

  constructor(
    private router: Router
  ) {  }

  ngOnInit() {}

  public activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

}

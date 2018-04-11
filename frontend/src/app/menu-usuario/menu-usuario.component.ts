import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  public isCollapsed = false;

  constructor(
    private router: Router
  ) {  }

  ngOnInit() {}

  public activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }

}

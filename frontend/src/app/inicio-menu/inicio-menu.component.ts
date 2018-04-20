import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-menu',
  templateUrl: './inicio-menu.component.html',
  styleUrls: ['./inicio-menu.component.css']
})
export class InicioMenuComponent implements OnInit {

  public isCollapsed = false;

  constructor(
    private router: Router
  ) {  }

  ngOnInit() {}

  public activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}

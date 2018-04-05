import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router'
@Component({
  selector: 'app-mercado',
  templateUrl: './mercado.component.html',
  styleUrls: ['./mercado.component.css']
})
export class MercadoComponent implements OnInit {
  public isCollapsed = false

  constructor(
    private router: Router) { }

  ngOnInit() {}
    public activeRoute(routename: string): boolean {
      return this.router.url.indexOf(routename) > -1;

    }

}

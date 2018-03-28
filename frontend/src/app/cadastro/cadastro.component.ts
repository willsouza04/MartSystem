import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router'
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  public isCollapsed = false

  constructor(
    private router: Router) { }

  ngOnInit() {}
    public activeRoute(routename: string): boolean {
      return this.router.url.indexOf(routename) > -1;

    }

}

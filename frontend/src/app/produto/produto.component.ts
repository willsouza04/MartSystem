import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mostrarTela();
  }

  public mostrarTela(){
    document.getElementById("produto").style.display = 'block';
    document.getElementById("loading").style.display = 'none';
  }
}

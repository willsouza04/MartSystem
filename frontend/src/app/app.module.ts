import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { appRoutes } from './app.routes';

import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MercadoComponent } from './mercado/mercado.component';
import { MenuMercadoComponent } from './menu-mercado/menu-mercado.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';

import { EntrarService } from './entrar/entrar.service';
import { CadastrarService } from './cadastrar/cadastrar.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeInicioComponent,
    MenuInicioComponent,
    EntrarComponent,
    CadastrarComponent,
    MercadoComponent,
    MenuMercadoComponent,
    MenuUsuarioComponent,
    UsuarioComponent,
    CadastrarProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [EntrarService, CadastrarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

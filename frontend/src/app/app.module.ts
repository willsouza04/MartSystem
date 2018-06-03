import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';

import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { appRoutes } from './app.routes';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home/home-menu/home-menu.component';
import { MercadoComponent } from './mercado/mercado.component';
import { MercadoMenuComponent } from './mercado/mercado-menu/mercado-menu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioMenuComponent } from './usuario/usuario-menu/usuario-menu.component';
import { ProdutoComponent } from './produto/produto.component';

import { EntrarService } from './entrar/entrar.service';
import { CadastrarService } from './cadastrar/cadastrar.service';
import { MercadoService } from './mercado/mercado.service';
import { UsuarioService } from './usuario/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    EntrarComponent,
    HomeComponent,
    HomeMenuComponent,
    MercadoComponent,
    MercadoMenuComponent,
    UsuarioComponent,
    UsuarioMenuComponent,
    ErrorComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [EntrarService, CadastrarService, MercadoService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

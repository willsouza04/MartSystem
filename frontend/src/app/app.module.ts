import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { appRoutes } from './app.routes';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { InicioMenuComponent } from './inicio-menu/inicio-menu.component';
import { MercadoComponent } from './mercado/mercado.component';
import { MercadoMenuComponent } from './mercado-menu/mercado-menu.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioMenuComponent } from './usuario-menu/usuario-menu.component';

import { EntrarService } from './entrar/entrar.service';
import { CadastrarService } from './cadastrar/cadastrar.service';
import { MercadoService } from './mercado/mercado.service';
import { UsuarioService } from './usuario/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    EntrarComponent,
    InicioComponent,
    InicioMenuComponent,
    MercadoComponent,
    MercadoMenuComponent,
    UsuarioComponent,
    UsuarioMenuComponent,
    ErrorComponent
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
  providers: [EntrarService, CadastrarService, MercadoService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

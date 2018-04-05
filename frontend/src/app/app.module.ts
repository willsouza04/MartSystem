import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { appRoutes } from './app.routes';

import { InicioComponent } from './inicio/inicio.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { HomeComponent } from './home/home.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MercadoComponent } from './mercado/mercado.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuInicioComponent,
    HomeComponent,
    EntrarComponent,
    CadastrarComponent,
    MercadoComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

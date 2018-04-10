import { RouterModule, Routes } from '@angular/router';

import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { MercadoComponent } from './mercado/mercado.component';

export const appRoutes: Routes = [
    { path: '' , component: MenuInicioComponent },
    { path: 'home' , component: HomeInicioComponent },
    { path: 'entrar' , component: EntrarComponent },
    { path: 'cadastrar' , component: CadastrarComponent },
    { path: 'mercado', component: MercadoComponent }
];

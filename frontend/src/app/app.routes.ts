import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { HomeComponent } from './home/home.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

export const appRoutes: Routes = [
    { path: '' , component: InicioComponent },
    { path: 'home' , component: HomeComponent },
    { path: 'entrar' , component: EntrarComponent },
    { path: 'cadastrar' , component: CadastrarComponent }
];

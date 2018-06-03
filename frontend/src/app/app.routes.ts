import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MercadoComponent } from './mercado/mercado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProdutoComponent } from './produto/produto.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'cadastrar' , component: CadastrarComponent },
    { path: 'entrar' , component: EntrarComponent },
    { path: 'error' , component: ErrorComponent},
    { path: 'home' , component: HomeComponent },
    { path: ':id/mercado', component: MercadoComponent },
    { path: ':id/usuario', component: UsuarioComponent},
    { path: ':id/produtos', component: ProdutoComponent},
    { path: '**', redirectTo: '/error', pathMatch: 'full'}
];

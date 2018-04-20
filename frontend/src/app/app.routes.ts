import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { MercadoComponent } from './mercado/mercado.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'cadastrar' , component: CadastrarComponent },
    { path: 'entrar' , component: EntrarComponent },
    { path: 'error' , component: ErrorComponent},
    { path: 'inicio' , component: InicioComponent },
    { path: 'mercado/:id', component: MercadoComponent },
    { path: 'usuario/:id', component: UsuarioComponent},
    { path: '**', redirectTo: '/error', pathMatch: 'full'}    
];

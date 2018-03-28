import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';

import { MenuComponent } from './menu/menu.component';

export const appRoutes: Routes = [
    { path: 'menu' , component: MenuComponent },
    { path: 'login' , component: CadastroComponent }


];

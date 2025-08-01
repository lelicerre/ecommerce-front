import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {authGuard} from './guards/auth.guard';
import {ProdutosFormComponent} from './components/produtos-form/produtos-form.component';
import {ProdutosComponent} from './components/produtos/produtos.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'produtos/new', component: ProdutosFormComponent, canActivate: [authGuard]},
  {path: 'produtos/editar/{id}', component: ProdutosFormComponent, canActivate: [authGuard]},
  {path: 'produtos', component: ProdutosComponent, canActivate: [authGuard]},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: '**', redirectTo: 'home'}
];

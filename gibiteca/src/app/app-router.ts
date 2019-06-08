/*import { Routes, RouterModule } from '@angular/router';*/
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EditoraComponent } from './editora/editora.component';
import { GibiComponent } from './gibi/gibi.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AuthGuard } from './login/login.guard';
import { LoginComponent } from './login/login.component';

export const routesapp : Routes = [
  { path: '', component: HomeComponent},
  { path: 'categoria',component: CategoriaComponent},
  { path: 'editora', component: EditoraComponent},
  { path: 'gibi', component: GibiComponent},
  { path: 'cliente', component: ClienteComponent},

  { path: 'clientes', loadChildren: 'app/clientes/cliente.module#ClientesModule',canActivate:[AuthGuard] },
  { path: 'signin', component: LoginComponent },
  
  { path: './home/home.component.html', component: HomeComponent},
  { path: './categoria/categoria.component.html',component: CategoriaComponent},
  { path: './editora/editora.component.html', component: EditoraComponent},
  { path: './gibi/gibi.component.html', component: GibiComponent},
  { path: './cliente/cliente.component.html', component: ClienteComponent}
];
export const Routing = RouterModule.forRoot(routesapp);
/*
export const RoutingModule = RouterModule.forRoot(routes);
*/
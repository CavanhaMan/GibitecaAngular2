import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria.component';

const CATEGORIAS_ROUTES: Routes = [
  {path: '',component: CategoriaComponent}
  {path: ':id',component: CategoriaComponent}
];

export const categoriasRouting = RouterModule.forChild(CATEGORIAS_ROUTES);
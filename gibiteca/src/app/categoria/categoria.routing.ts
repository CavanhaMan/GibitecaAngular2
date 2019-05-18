import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria.component';

const CATEGORIAS_ROUTES: Routes = [{
  path: '',
  component: CategoriaComponent
}];

export const categoriasRouting = RouterModule.forChild(CATEGORIAS_ROUTES);
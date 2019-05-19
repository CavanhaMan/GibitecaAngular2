import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';

const CLIENTES_ROUTES: Routes = [
  {path: '',component: ClienteComponent},
  {path: ':id',component: ClienteComponent}
];

export const clientesRouting = RouterModule.forChild(CLIENTES_ROUTES);
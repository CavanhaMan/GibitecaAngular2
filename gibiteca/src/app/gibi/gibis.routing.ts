import { Routes, RouterModule } from '@angular/router';
import { GibiComponent } from './gibi.component';

const GIBIS_ROUTES: Routes = [{
  path: '',
  component: GibiComponent
}];

export const gibisRouting = RouterModule.forChild(GIBIS_ROUTES);
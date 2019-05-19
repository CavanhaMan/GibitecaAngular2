import { Routes, RouterModule } from '@angular/router';
import { EditoraComponent } from './editora.component';

const EDITORA_ROUTES: Routes = [
  {path: '',component: EditoraComponent},
  {path: ':id',component: EditoraComponent}
];

export const editorasRouting = RouterModule.forChild(EDITORA_ROUTES);
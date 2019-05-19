import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component'
import { categoriasRouting } from './categorias.routing';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from './categorias.service';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

@NgModule({
  imports: [CommonModule,categoriasRouting,FormsModule],
  declarations: [CategoriaComponent, CategoriaFormComponent],
  providers: [CategoriasService]
})

export class CategoriaModule{ }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component'
import { categoriasRouting } from './categorias.routing';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from './categorias.service';

@NgModule({
  imports: [CommonModule,categoriasRouting,FormsModule],
  declarations: [CategoriaComponent],
  providers: [CategoriasService]
})

export class CategoriaModule{ }
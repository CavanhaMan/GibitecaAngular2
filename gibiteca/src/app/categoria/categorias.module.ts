import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria.component'
import { categoriasRouting } from './categorias.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,categoriasRouting,FormsModule],
  declarations: [CategoriaComponent]
})

export class CategoriaModule{ }
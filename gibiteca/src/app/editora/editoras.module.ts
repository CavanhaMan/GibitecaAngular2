import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditoraComponent } from './editora.component'
import { editorasRouting } from './editoras.routing';
import { FormsModule } from '@angular/forms';
import { EditorasService } from './editoras.service';

@NgModule({
  imports: [CommonModule,editorasRouting,FormsModule],
  declarations: [EditoraComponent],
  providers: [EditorasService]
})

export class EditorasModule{ }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditoraComponent } from './editora.component'
import { editorasRouting } from './editoras.routing';
import { FormsModule } from '@angular/forms';
import { EditorasService } from './editoras.service';
import { EditoraFormComponent } from './editora-form/editora-form.component';

@NgModule({
  imports: [CommonModule,editorasRouting,FormsModule],
  declarations: [EditoraComponent, EditoraFormComponent],
  providers: [EditorasService]
})

export class EditorasModule{ }
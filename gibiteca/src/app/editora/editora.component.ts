import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { EditorasService } from './editoras.service';

@Component({
  selector: 'app-editora',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent implements OnInit {

  constructor( private editoraService: EditorasService ) { }

  editoras: Editora[] = [];

  criterio: String;

  ngOnInit() {
    this.editoraService.getAll() //getAll adicionou o código [x: string]: any; no arquivo editora.service.ts
    .subscribe(data => this.editoras = data, err => {alert('Aconteceu um erro!');});

    this.editoras = [{
      'codigo':1,
      'nome':'Editora tal',
      'site':'www.editoratal.com.br',
      'pais':'Brasil'
    }]
  }

}

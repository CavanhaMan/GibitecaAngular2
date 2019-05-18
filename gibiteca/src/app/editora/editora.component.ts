import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';

@Component({
  selector: 'app-editora',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent implements OnInit {

  constructor() { }

  editoras: Editora[] = [];

  ngOnInit() {
    this.editoras = [{
      'codigo':1,
      'nome':'Editora tal',
      'site':'www.editoratal.com.br',
      'pais':'Brasil'
    }]
  }

}

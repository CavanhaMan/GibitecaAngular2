import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  categorias: Categoria[] = [];

  ngOnInit() {
    this.categorias = [{
      'codigo':1,
      'nome':'Aventura',
      'descricao':'Gibis de aventura'
    }]
  }

}

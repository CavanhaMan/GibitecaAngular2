import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor( private categoriaService: CategoriasService ) { }

  categorias: Categoria[] = [];

  criterio: String;

  ngOnInit() {
    this.categoriaService.getAll() //getAll adicionou o código [x: string]: any; no arquivo categoria.service.ts
    .subscribe(data => this.categorias = data, err => {alert('Aconteceu um erro!');});

    this.categorias = [{
      'codigo':1,
      'nome':'Aventura',
      'descricao':'Gibis de aventura'
    }]
  }

}

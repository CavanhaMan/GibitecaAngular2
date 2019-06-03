import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriasService } from './categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private categoriaIndex: number;
  private isNew: boolean = true;
  private categoria: Categoria;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, 
              private router:Router,
              private categoriaService: CategoriasService ) { }
  
  categorias: Categoria[] = [];

  criterio: String;

  ngOnInit() {
    //this.categoriaService.getAll().subscribe(data => this.categorias = data, err => {alert('Aconteceu um erro ' + err) ;});

    this.categoriaService.categoriasChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.categoria = data
      )
    );

    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.categoriaIndex = params['id'];
          this.categoriaService.get(this.categoriaIndex)
          .subscribe(data => this.categoria = data);
        } else {this.isNew = true;}
      }
    );
    this.categorias = [{
      'codigo':1,
      'nome':'Aventura',
      'descricao':'Gibis de aventura'
    }]
  }

  /********* */
  novo() {this.categoria = new Categoria();}

  cancelar() {this.voltar();}

  voltar() {this.router.navigate(['/categorias']);}

  pesquisarTodos() {
    this.categoriaService.getAll().subscribe(data =>this.categorias = data, err =>{alert('Aconteceu um erro!'); 
  });}

  salvar() {
    let result;
    if (this.isNew) {result = this.categoriaService.add(this.categoria);}
    else {result = this.categoriaService.update(this.categoria);}
    this.novo();
    this.voltar();
    result.subscribe(data => {alert('sucesso ' +data); this.pesquisarTodos();},
    err => {alert("An error occurred. "+ err);});
  }

  excluir() {
    if (this.categoria.codigo == null) {alert('Selecione algum categoria');}
    else {
      if (confirm('Você realmente quer excluir o categoria '+this.categoria.nome+'?')) {
        this.categoriaService.remove(this.categoria.codigo)
        .subscribe(
          data => alert('Categoria removido '+data),
          err => {alert('Categoria não removido');});
          this.novo();
          this.voltar();
      }
    }
  }

}

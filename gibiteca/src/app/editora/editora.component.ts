import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Editora } from '../editora';
import { EditorasService } from './editoras.service';

@Component({
  selector: 'app-editora',
  templateUrl: './editora.component.html',
  styleUrls: ['./editora.component.css']
})
export class EditoraComponent implements OnInit {

  private editoraIndex: number;
  private isNew: boolean = true;
  private editora: Editora;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, 
              private router:Router,
              private editoraService: EditorasService ) { }
  
  editoras: Editora[] = [];

  criterio: String;

  ngOnInit() {
    //this.editoraService.getAll().subscribe(data => this.editoras = data, err => {alert('Aconteceu um erro ' + err) ;});

    this.editoraService.editorasChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.editora = data
      )
    );

    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.editoraIndex = params['id'];
          this.editoraService.get(this.editoraIndex)
          .subscribe(data => this.editora = data);
        } else {this.isNew = true;}
      }
    );

    this.pesquisarTodos();

/*    this.editoras = [{
      'codigo':1,
      'nome':'Editora tal',
      'site':'www.editoratal.com.br',
      'pais':'Brasil'
    }]*/
  }

  /********* */
  novo() {this.editora = new Editora();}

  cancelar() {this.voltar();}

  voltar() {this.router.navigate(['/editoras']);}

  pesquisarTodos() {
    this.editoraService.getAll().subscribe(data =>this.editoras = data, err =>{alert('Aconteceu um erro!'); 
  });}

  salvar() {
    let result;
    if (this.isNew) {result = this.editoraService.add(this.editora);}
    else {result = this.editoraService.update(this.editora);}
    this.novo();
    this.voltar();
    result.subscribe(data => {alert('sucesso ' +data); this.pesquisarTodos();},
    err => {alert("An error occurred. "+ err);});
  }

  excluir() {
    if (this.editora.codigo == null) {alert('Selecione algum editora');}
    else {
      if (confirm('Você realmente quer excluir o editora '+this.editora.nome+'?')) {
        this.editoraService.remove(this.editora.codigo)
        .subscribe(
          data => alert('Editora removido '+data),
          err => {alert('Editora não removido');});
          this.novo();
          this.voltar();
      }
    }
  }

}

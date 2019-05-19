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
  }

  /********* */
  novo() {this.editora = new Editora();}

  cancelar() {this.voltar();}

  voltar() {this.router.navigate(['/editoras']);}

  salvar() {
    let result;
    if (this.isNew) {result = this.editoraService.add(this.editora);}
    else {result = this.editoraService.update(this.editora);}
    this.novo();
    this.voltar();
    result.subscribe(data => alert('sucesso ' +data),
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

  /********* 

    this.editoraService.getAll()
    .subscribe(data => this.editoras = data, err => {alert('Aconteceu um erro!');});

    this.editoras = [{
      'codigo':1,
      'nome':'Editora tal',
      'site':'www.editoratal.com.br',
      'pais':'Brasil'
    }]
  }
*/
}

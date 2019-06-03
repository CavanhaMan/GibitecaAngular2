import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Gibi } from '../gibi';
import { GibisService } from './gibis.service';

@Component({
  selector: 'app-gibi',
  templateUrl: './gibi.component.html',
  styleUrls: ['./gibi.component.css']
})
export class GibiComponent implements OnInit {

  private gibiIndex: number;
  private isNew: boolean = true;
  private gibi: Gibi;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, 
              private router:Router,
              private gibiService: GibisService ) { }
  
  gibis: Gibi[] = [];

  criterio: String;

  ngOnInit() {
    //this.gibiService.getAll().subscribe(data => this.gibi = data, err => {alert('Aconteceu um erro ' + err) ;});

    this.gibiService.gibisChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.gibi = data
      )
    );

    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.gibiIndex = params['id'];
          this.gibiService.get(this.gibiIndex)
          .subscribe(data => this.gibi = data);
        } else {this.isNew = true;}
      }
    );
    this.gibis = [{
      'codigo':1,
      'autor':'Fulano',
      'isbn':'123456789',
      'titulo':'O gibi numero 1'
    }]
  }

  /********* */
  novo() {this.gibi = new Gibi();}

  cancelar() {this.voltar();}

  voltar() {this.router.navigate(['/gibis']);}

  pesquisarTodos() {
    this.gibiService.getAll().subscribe(data =>this.gibis = data, err =>{alert('Aconteceu um erro!'); 
  });}

  salvar() {
    let result;
    if (this.isNew) {result = this.gibiService.add(this.gibi);}
    else {result = this.gibiService.update(this.gibi);}
    this.novo();
    this.voltar();
    result.subscribe(data => {alert('sucesso ' +data); this.pesquisarTodos();},
    err => {alert("An error occurred. "+ err);});
  }

  excluir() {
    if (this.gibi.codigo == null) {alert('Selecione algum gibi');}
    else {
      if (confirm('Você realmente quer excluir o gibi '+this.gibi.titulo+'?')) {
        this.gibiService.remove(this.gibi.codigo)
        .subscribe(
          data => alert('Gibi removido '+data),
          err => {alert('Gibi não removido');});
          this.novo();
          this.voltar();
      }
    }
  }

}

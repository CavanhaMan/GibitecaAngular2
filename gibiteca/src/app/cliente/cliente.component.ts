import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClientesService } from './clientes.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  private clienteIndex: number;
  private isNew: boolean = true;
  private cliente: Cliente;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, 
              private router:Router,
              private clienteService: ClientesService ) { }
  
  clientes: Cliente[] = [];

  criterio: String;

  ngOnInit() {
    //this.clienteService.getAll().subscribe(data => this.clientes = data, err => {alert('Aconteceu um erro ' + err) ;});
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.clienteIndex = params['id'];
          this.clienteService.get(this.clienteIndex)
          .subscribe(data => this.cliente = data);
        } else {this.isNew = true;}
      }
    );
    
    this.clienteService.clientesChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.cliente = data
      )
    );

    this.pesquisarTodos();

/*    this.clientes = [{
      'codigo':1,
      'nome':'Rodrigo Cavanha',
      'email':'cavanhaman@hotmail.com',
      'endereco':'Rua 1, 1444',
      'cidade':'Uberlandia',
      'cep':'38.408-214',
      'pais':'Brasil',
      'telefone':'3432109876'
    }]*/
  }

  pesquisarTodos() {
    this.clienteService.getAll().subscribe(data =>this.clientes = data, err =>{alert('Aconteceu um erro!'); 
  });}

  /********* */
  novo() {this.cliente = new Cliente();}

  cancelar() {this.voltar();}

  voltar() {this.router.navigate(['/cliente']);}

  salvar() {
    let result;
    if (this.isNew) {result = this.clienteService.add(this.cliente);}
    else {result = this.clienteService.update(this.cliente);}
    
    this.novo();
    this.voltar();
    
    result.subscribe(data => {alert('sucesso ' +data); this.pesquisarTodos();},
    err => {alert("An error occurred. "+ err);});
  }

  excluir() {
    if (this.cliente.codigo == null) {alert('Selecione algum cliente');}
    else {
      if (confirm('Você realmente quer excluir o cliente '+this.cliente.nome+'?')) {
        this.clienteService.remove(this.cliente.codigo)
        .subscribe(
          data => alert('Cliente removido '+data),
          err => {alert('Cliente não removido');});
          this.novo();
          this.voltar();
      }
    }
  }
}

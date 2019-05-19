import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor( private clienteService: ClientesService ) { }
  
  clientes: Cliente[] = [];

  criterio: String;

  ngOnInit() {
    this.clienteService.getAll() //getAll adicionou o código [x: string]: any; no arquivo cliente.service.ts
        .subscribe(data => this.clientes = data, err => {alert('Aconteceu um erro!');});

    this.clientes = [{
      'codigo':1,
      'nome':'Rodrigo Cavanha',
      'email':'cavanhaman@hotmail.com',
      'endereco':'Rua 1, 1444',
      'cidade':'Uberlandia',
      'cep':'38.408-214',
      'pais':'Brasil',
      'telefone':'3432109876'
    }]
  }

}

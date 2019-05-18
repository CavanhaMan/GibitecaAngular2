import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }
  
  clientes: Cliente[] = [];

  ngOnInit() {
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

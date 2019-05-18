import { Component, OnInit } from '@angular/core';
import { Gibi } from '../gibi';

@Component({
  selector: 'app-gibi',
  templateUrl: './gibi.component.html',
  styleUrls: ['./gibi.component.css']
})
export class GibiComponent implements OnInit {

  constructor() { }

  gibis: Gibi[] = [];

  ngOnInit() {
    this.gibis = [{
      'codigo':1,
      'autor':'Fulano',
      'isbn':'123456789',
      'titulo':'O gibi numero 1'
    }]
  }

}

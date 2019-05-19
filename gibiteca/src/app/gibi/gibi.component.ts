import { Component, OnInit } from '@angular/core';
import { Gibi } from '../gibi';
import { GibisService } from './gibis.service';
import { GibiService } from '../gibi.service';

@Component({
  selector: 'app-gibi',
  templateUrl: './gibi.component.html',
  styleUrls: ['./gibi.component.css']
})
export class GibiComponent implements OnInit {

  constructor( private gibiService: GibisService ) { }

  criterio: String;

  gibis: Gibi[] = [];

  ngOnInit() {
    this.gibiService.getAll()
    .subscribe(data => this.gibis = data, err => {alert('Aconteceu um erro!');});

    this.gibis = [{
      'codigo':1,
      'autor':'Fulano',
      'isbn':'123456789',
      'titulo':'O gibi numero 1'
    }]
  }

}

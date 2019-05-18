import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Gibi } from '../gibi';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
  export class GibisService{
    private url: string = 'http://localhost:9000/gibis';
    constructor (private http: Http) {}

    getAll(): Observable<Gibi[]> {
      return this.http.get(this.url)
                      .map(res => res.json())
                      .catch(this.handleError);         
    }
  
    private handleError(error: any) {
      let erro = error.messsage || 'Server error';
      console.error('Ocorreu um erro ',error);
      return Observable.throw(erro);
    }
  }
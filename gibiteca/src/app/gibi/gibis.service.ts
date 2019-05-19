import { Injectable, EventEmitter } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Gibi } from '../gibi';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()
  export class GibisService{
    private url: string = 'http://localhost:9000/gibis';

    gibisChanged = new EventEmitter<Observable<Gibi[]>>();

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
  
  /**************** */
  add(gibi: Gibi) {
    return this.http.post(this.url,JSON.stringify(gibi),
    {headers: this.getHeaders()})
    .do(data => this.gibisChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  update(gibi: Gibi) {
    return this.http.put(this.url,JSON.stringify(gibi),
    {headers: this.getHeaders()})
    .do(data => this.gibisChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id),
           {headers: this.getHeaders()})
           //.map(res => res.json())
           .do(data => this.gibisChanged.emit(this.getAll()))
           .catch(this.handleError);
  }

  get(id: number) {
    return this.getAll()
           .map((list: any) => list.find(gibi => gibi.codigo == id))
           .catch(this.handleError);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return headers;
  }

  private getUrl(id: number) {
    return `${this.url}/${id}`;
  }


}
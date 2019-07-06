import { Injectable, EventEmitter } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Editora } from '../editora';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable({providedIn: 'root'})
  export class EditorasService{
    private url: string = 'http://localhost:3000/editoras';

    editorasChanged = new EventEmitter<Observable<Editora[]>>();
    
    constructor (private http: Http) {}

    getAll(): Observable<Editora[]> {
      return this.http.get(this.url)
                      .map(res => res.json())
                      .catch(this.handleError);         
    }
  
    private handleError(error: any) {
      let erro = error.messsage || 'Server error';
      console.error('Ocorreu um erro ',error);
      return Observable.throw(erro);
    }
  
  /*********************** */
  add(editora: Editora) {
    return this.http.post(this.url,JSON.stringify(editora),
    {headers: this.getHeaders()})
    .do(data => this.editorasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  update(editora: Editora) {
    return this.http.put(this.url,JSON.stringify(editora),
    {headers: this.getHeaders()})
    .do(data => this.editorasChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id),
           {headers: this.getHeaders()})
           //.map(res => res.json())
           .do(data => this.editorasChanged.emit(this.getAll()))
           .catch(this.handleError);
  }

  get(id: number) {
    return this.getAll()
           .map((list: any) => list.find(editora => editora.codigo == id))
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
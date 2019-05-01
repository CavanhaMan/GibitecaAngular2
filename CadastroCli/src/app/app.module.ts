import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { GibiComponent } from './gibi/gibi.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EditoraComponent } from './editora/editora.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    GibiComponent,
    CategoriaComponent,
    ClienteComponent,
    EditoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

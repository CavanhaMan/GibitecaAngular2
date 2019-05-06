import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app-router';
/*--------------imports copiado do menu---------------*/
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatIconModule,
         MatListModule,
         MatSidenavModule,
         MatToolbarModule
} from '@angular/material';
/*--------------fim dos imports copiado do menu---------------*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { GibiComponent } from './gibi/gibi.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EditoraComponent } from './editora/editora.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    GibiComponent,
    CategoriaComponent,
    ClienteComponent,
    EditoraComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Routing,
/*--------------imports copiado do menu---------------*/
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule
/*--------------fim dos imports copiado do menu---------------*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

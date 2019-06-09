import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routesapp } from './app-router';

/*--------------imports copiado do menu---------------*/
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatIconModule,
         MatListModule,
         MatSidenavModule,
         MatToolbarModule } from '@angular/material';
/*--------------fim dos imports copiado do menu---------------*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { GibiComponent } from './gibi/gibi.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EditoraComponent } from './editora/editora.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login/login-service.service';
import { AuthGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    GibiComponent,
    CategoriaComponent,
    ClienteComponent,
    EditoraComponent,
    HomeComponent,
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routesapp)
],
  providers: [
    LoginServiceService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

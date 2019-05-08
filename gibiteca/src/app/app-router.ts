/*import { Routes, RouterModule } from '@angular/router';*/
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './livros/livros.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { EditoraComponent } from './editora/editora.component';
import { GibiComponent } from './gibi/gibi.component';
import { ClienteComponent } from './cliente/cliente.component';

export const routesapp : Routes = [
  { path: '', component: HomeComponent},
  { path: 'livros', component: LivrosComponent},
  { path: 'categoria',component: CategoriaComponent},
  { path: 'editora', component: EditoraComponent},
  { path: 'gibi', component: GibiComponent},
  { path: 'cliente', component: ClienteComponent}
]
/*export const Routing = RouterModule.forRoot(routesapp);*/
/*
import {Routes, RouterModule } from '@angular/router'
import { ProfessorComponent } from './professor/professor.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { AreaConhecimentoComponent } from './area-conhecimento/area-conhecimento.component';
import { HomeComponent } from "./home/home.component";

const routes : Routes = [
    {path: '',component: HomeComponent},
    {path: './home/home.component.html',component: HomeComponent},
    {path: 'professor',component: ProfessorComponent},
    {path: './professor/professor.component.html',component: ProfessorComponent},
    {path: 'conteudo',component: ConteudoComponent},
    {path: './conteudo/conteudo.component.html',component: ConteudoComponent},
    {path: 'disciplina',component: DisciplinaComponent},
    {path: './disciplina/disciplina.component.html',component: DisciplinaComponent},
    {path: 'areaConhecimento',component: AreaConhecimentoComponent},
    {path: './area-conhecimento/area-conhecimento.component.html',component: AreaConhecimentoComponent}
];
export const RoutingModule = RouterModule.forRoot(routes);
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovilidadAcademicaComponent } from './movilidad_academica.component';
import { ListMovilidadAcademicaComponent } from './list-movilidad_academica/list-movilidad_academica.component';
import { CrudMovilidadAcademicaComponent } from './crud-movilidad_academica/crud-movilidad_academica.component';



const routes: Routes = [{
  path: '',
  component: MovilidadAcademicaComponent,
  children: [{
    path: 'list-movilidad_academica',
    component: ListMovilidadAcademicaComponent,
  }, {
    path: 'crud-movilidad_academica',
    component: CrudMovilidadAcademicaComponent,
  }],
}];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [
      RouterModule,
  ],
})

export class MovilidadAcademicaRoutingModule { }

export const routedComponents = [
  MovilidadAcademicaComponent,
  ListMovilidadAcademicaComponent,
  CrudMovilidadAcademicaComponent,
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovilidadComponent } from './movilidad.component';
import { ListMovilidadComponent } from './list-movilidad/list-movilidad.component';
import { CrudMovilidadComponent } from './crud-movilidad/crud-movilidad.component';



const routes: Routes = [{
  path: '',
  component: MovilidadComponent,
  children: [{
    path: 'list-movilidad',
    component: ListMovilidadComponent,
  }, {
    path: 'crud-movilidad',
    component: CrudMovilidadComponent,
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

export class MovilidadRoutingModule { }

export const routedComponents = [
  MovilidadComponent,
  ListMovilidadComponent,
  CrudMovilidadComponent,
];

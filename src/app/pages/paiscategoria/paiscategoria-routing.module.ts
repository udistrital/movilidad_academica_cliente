import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaiscategoriaComponent } from './paiscategoria.component';
import { ListPaiscategoriaComponent } from './list-paiscategoria/list-paiscategoria.component';
import { CrudPaiscategoriaComponent } from './crud-paiscategoria/crud-paiscategoria.component';



const routes: Routes = [{
  path: '',
  component: PaiscategoriaComponent,
  children: [{
    path: 'list-paiscategoria',
    component: ListPaiscategoriaComponent,
  }, {
    path: 'crud-paiscategoria',
    component: CrudPaiscategoriaComponent,
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

export class PaiscategoriaRoutingModule { }

export const routedComponents = [
  PaiscategoriaComponent,
  ListPaiscategoriaComponent,
  CrudPaiscategoriaComponent,
];

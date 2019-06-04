import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaComponent } from './categoria.component';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { CrudCategoriaComponent } from './crud-categoria/crud-categoria.component';



const routes: Routes = [{
  path: '',
  component: CategoriaComponent,
  children: [{
    path: 'list-categoria',
    component: ListCategoriaComponent,
  }, {
    path: 'crud-categoria',
    component: CrudCategoriaComponent,
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

export class CategoriaRoutingModule { }

export const routedComponents = [
  CategoriaComponent,
  ListCategoriaComponent,
  CrudCategoriaComponent,
];

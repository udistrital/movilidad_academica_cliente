import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntidadComponent } from './entidad.component';
import { ListEntidadComponent } from './list-entidad/list-entidad.component';
import { CrudEntidadComponent } from './crud-entidad/crud-entidad.component';



const routes: Routes = [{
  path: '',
  component: EntidadComponent,
  children: [{
    path: 'list-entidad',
    component: ListEntidadComponent,
  }, {
    path: 'crud-entidad',
    component: CrudEntidadComponent,
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

export class EntidadRoutingModule { }

export const routedComponents = [
  EntidadComponent,
  ListEntidadComponent,
  CrudEntidadComponent,
];

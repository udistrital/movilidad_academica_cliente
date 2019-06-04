import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadosComponent } from './estados.component';
import { ListEstadosComponent } from './list-estados/list-estados.component';
import { CrudEstadosComponent } from './crud-estados/crud-estados.component';



const routes: Routes = [{
  path: '',
  component: EstadosComponent,
  children: [{
    path: 'list-estados',
    component: ListEstadosComponent,
  }, {
    path: 'crud-estados',
    component: CrudEstadosComponent,
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

export class EstadosRoutingModule { }

export const routedComponents = [
  EstadosComponent,
  ListEstadosComponent,
  CrudEstadosComponent,
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipocategoriaComponent } from './tipocategoria.component';
import { ListTipocategoriaComponent } from './list-tipocategoria/list-tipocategoria.component';
import { CrudTipocategoriaComponent } from './crud-tipocategoria/crud-tipocategoria.component';



const routes: Routes = [{
  path: '',
  component: TipocategoriaComponent,
  children: [{
    path: 'list-tipocategoria',
    component: ListTipocategoriaComponent,
  }, {
    path: 'crud-tipocategoria',
    component: CrudTipocategoriaComponent,
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

export class TipocategoriaRoutingModule { }

export const routedComponents = [
  TipocategoriaComponent,
  ListTipocategoriaComponent,
  CrudTipocategoriaComponent,
];

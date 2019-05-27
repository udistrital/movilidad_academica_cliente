import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaisComponent } from './pais.component';
import { ListPaisComponent } from './list-pais/list-pais.component';
import { CrudPaisComponent } from './crud-pais/crud-pais.component';



const routes: Routes = [{
  path: '',
  component: PaisComponent,
  children: [{
    path: 'list-pais',
    component: ListPaisComponent,
  }, {
    path: 'crud-pais',
    component: CrudPaisComponent,
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

export class PaisRoutingModule { }

export const routedComponents = [
  PaisComponent,
  ListPaisComponent,
  CrudPaisComponent,
];

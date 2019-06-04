import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaturalezaComponent } from './naturaleza.component';
import { ListNaturalezaComponent } from './list-naturaleza/list-naturaleza.component';
import { CrudNaturalezaComponent } from './crud-naturaleza/crud-naturaleza.component';



const routes: Routes = [{
  path: '',
  component: NaturalezaComponent,
  children: [{
    path: 'list-naturaleza',
    component: ListNaturalezaComponent,
  }, {
    path: 'crud-naturaleza',
    component: CrudNaturalezaComponent,
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

export class NaturalezaRoutingModule { }

export const routedComponents = [
  NaturalezaComponent,
  ListNaturalezaComponent,
  CrudNaturalezaComponent,
];

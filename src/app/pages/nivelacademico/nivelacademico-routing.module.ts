import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NivelacademicoComponent } from './nivelacademico.component';
import { ListNivelacademicoComponent } from './list-nivelacademico/list-nivelacademico.component';
import { CrudNivelacademicoComponent } from './crud-nivelacademico/crud-nivelacademico.component';



const routes: Routes = [{
  path: '',
  component: NivelacademicoComponent,
  children: [{
    path: 'list-nivelacademico',
    component: ListNivelacademicoComponent,
  }, {
    path: 'crud-nivelacademico',
    component: CrudNivelacademicoComponent,
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

export class NivelacademicoRoutingModule { }

export const routedComponents = [
  NivelacademicoComponent,
  ListNivelacademicoComponent,
  CrudNivelacademicoComponent,
];

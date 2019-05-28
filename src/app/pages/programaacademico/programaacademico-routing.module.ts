import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramaacademicoComponent } from './programaacademico.component';
import { ListProgramaacademicoComponent } from './list-programaacademico/list-programaacademico.component';
import { CrudProgramaacademicoComponent } from './crud-programaacademico/crud-programaacademico.component';



const routes: Routes = [{
  path: '',
  component: ProgramaacademicoComponent,
  children: [{
    path: 'list-programaacademico',
    component: ListProgramaacademicoComponent,
  }, {
    path: 'crud-programaacademico',
    component: CrudProgramaacademicoComponent,
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

export class ProgramaacademicoRoutingModule { }

export const routedComponents = [
  ProgramaacademicoComponent,
  ListProgramaacademicoComponent,
  CrudProgramaacademicoComponent,
];

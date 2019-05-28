import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConvenioComponent } from './convenio.component';
import { ListConvenioComponent } from './list-convenio/list-convenio.component';
import { CrudConvenioComponent } from './crud-convenio/crud-convenio.component';



const routes: Routes = [{
  path: '',
  component: ConvenioComponent,
  children: [{
    path: 'list-convenio',
    component: ListConvenioComponent,
  }, {
    path: 'crud-convenio',
    component: CrudConvenioComponent,
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

export class ConvenioRoutingModule { }

export const routedComponents = [
  ConvenioComponent,
  ListConvenioComponent,
  CrudConvenioComponent,
];

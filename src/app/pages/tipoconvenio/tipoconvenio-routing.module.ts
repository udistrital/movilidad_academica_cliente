import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoconvenioComponent } from './tipoconvenio.component';
import { ListTipoconvenioComponent } from './list-tipoconvenio/list-tipoconvenio.component';
import { CrudTipoconvenioComponent } from './crud-tipoconvenio/crud-tipoconvenio.component';



const routes: Routes = [{
  path: '',
  component: TipoconvenioComponent,
  children: [{
    path: 'list-tipoconvenio',
    component: ListTipoconvenioComponent,
  }, {
    path: 'crud-tipoconvenio',
    component: CrudTipoconvenioComponent,
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

export class TipoconvenioRoutingModule { }

export const routedComponents = [
  TipoconvenioComponent,
  ListTipoconvenioComponent,
  CrudTipoconvenioComponent,
];

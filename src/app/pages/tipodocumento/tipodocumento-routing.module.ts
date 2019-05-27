import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipodocumentoComponent } from './tipodocumento.component';
import { ListTipodocumentoComponent } from './list-tipodocumento/list-tipodocumento.component';
import { CrudTipodocumentoComponent } from './crud-tipodocumento/crud-tipodocumento.component';



const routes: Routes = [{
  path: '',
  component: TipodocumentoComponent,
  children: [{
    path: 'list-tipodocumento',
    component: ListTipodocumentoComponent,
  }, {
    path: 'crud-tipodocumento',
    component: CrudTipodocumentoComponent,
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

export class TipodocumentoRoutingModule { }

export const routedComponents = [
  TipodocumentoComponent,
  ListTipodocumentoComponent,
  CrudTipodocumentoComponent,
];

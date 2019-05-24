import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipomovilidadComponent } from './tipomovilidad.component';
import { ListTipomovilidadComponent } from './list-tipomovilidad/list-tipomovilidad.component';
import { CrudTipomovilidadComponent } from './crud-tipomovilidad/crud-tipomovilidad.component';



const routes: Routes = [{
  path: '',
  component: TipomovilidadComponent,
  children: [{
    path: 'list-tipomovilidad',
    component: ListTipomovilidadComponent,
  }, {
    path: 'crud-tipomovilidad',
    component: CrudTipomovilidadComponent,
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

export class TipomovilidadRoutingModule { }

export const routedComponents = [
  TipomovilidadComponent,
  ListTipomovilidadComponent,
  CrudTipomovilidadComponent,
];

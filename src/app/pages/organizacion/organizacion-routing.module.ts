import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizacionComponent } from './organizacion.component';
import { ListOrganizacionComponent } from './list-organizacion/list-organizacion.component';
import { CrudOrganizacionComponent } from './crud-organizacion/crud-organizacion.component';



const routes: Routes = [{
  path: '',
  component: OrganizacionComponent,
  children: [{
    path: 'list-organizacion',
    component: ListOrganizacionComponent,
  }, {
    path: 'crud-organizacion',
    component: CrudOrganizacionComponent,
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

export class OrganizacionRoutingModule { }

export const routedComponents = [
  OrganizacionComponent,
  ListOrganizacionComponent,
  CrudOrganizacionComponent,
];

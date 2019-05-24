import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
    path: 'dashboard',
    component: DashboardComponent,
    },
    {
    path: 'movilidad',
    loadChildren: './movilidad/movilidad.module#MovilidadModule',
    },
    {
    path: 'tipocategoria',
    loadChildren: './tipocategoria/tipocategoria.module#TipocategoriaModule',
    },
    {
    path: 'tipomovilidad',
    loadChildren: './tipomovilidad/tipomovilidad.module#TipomovilidadModule',
    },
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}


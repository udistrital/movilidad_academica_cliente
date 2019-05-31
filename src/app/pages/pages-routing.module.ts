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
      path: 'movilidad_academica',
      loadChildren: './movilidad_academica/movilidad_academica.module#MovilidadAcademicaModule',
      },
      {
      path: 'tipodocumento',
      loadChildren: './tipodocumento/tipodocumento.module#TipodocumentoModule',
      },
      {
      path: 'programaacademico',
      loadChildren: './programaacademico/programaacademico.module#ProgramaacademicoModule',
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
      path: 'nivelacademico',
      loadChildren: './nivelacademico/nivelacademico.module#NivelacademicoModule',
      },
      {
      path: 'organizacion',
      loadChildren: './organizacion/organizacion.module#OrganizacionModule',
      },
      {
      path: 'pais',
      loadChildren: './pais/pais.module#PaisModule',
      },
    {
    path: 'tipomovilidad',
    loadChildren: './tipomovilidad/tipomovilidad.module#TipomovilidadModule',
    },
    {
      path: 'naturaleza',
      loadChildren: './naturaleza/naturaleza.module#NaturalezaModule',
      },
      {
      path: 'entidad',
      loadChildren: './entidad/entidad.module#EntidadModule',
      },
      {
      path: 'estados',
      loadChildren: './estados/estados.module#EstadosModule',
      },
      {
      path: 'paiscategoria',
      loadChildren: './paiscategoria/paiscategoria.module#PaiscategoriaModule',
      },
      {
      path: 'categoria',
      loadChildren: './categoria/categoria.module#CategoriaModule',
      },
      {
      path: 'convenio',
      loadChildren: './convenio/convenio.module#ConvenioModule',
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


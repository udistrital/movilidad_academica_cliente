import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: '' , redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'inicio' , component: InicioComponent},
  { path: 'add' ,  component: AgregarComponent},
  { path: 'edit/:id' , component: ActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { OrganizacionRoutingModule, routedComponents } from './organizacion-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MovilidadAcademicaService } from '../../@core/data/movilidad_academica.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudOrganizacionComponent } from './crud-organizacion/crud-organizacion.component';
import { ToasterService} from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    OrganizacionRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    MovilidadAcademicaService,
    ToasterService,
  ],
  exports: [
    CrudOrganizacionComponent,
  ],
})
export class OrganizacionModule { }

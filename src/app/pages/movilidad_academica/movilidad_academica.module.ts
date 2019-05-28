import { MovilidadAcademicaRoutingModule, routedComponents } from './movilidad_academica-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MovilidadAcademicaService } from '../../@core/data/movilidad_academica.service';
import { MovilidadMidService } from '../../@core/data/movilidad_mid.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudMovilidadAcademicaComponent } from './crud-movilidad_academica/crud-movilidad_academica.component';
import { ToasterService} from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    MovilidadAcademicaRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    MovilidadAcademicaService,
    MovilidadMidService,
    ToasterService,
  ],
  exports: [
    CrudMovilidadAcademicaComponent,
  ],
})
export class MovilidadAcademicaModule { }

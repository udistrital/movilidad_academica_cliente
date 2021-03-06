import { EntidadRoutingModule, routedComponents } from './entidad-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ConvenioService } from '../../@core/data/convenio.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudEntidadComponent } from './crud-entidad/crud-entidad.component';
import { ToasterService} from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    EntidadRoutingModule,
    Ng2SmartTableModule,
    ToasterModule,
    SharedModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ConvenioService,
    ToasterService,
  ],
  exports: [
    CrudEntidadComponent,
  ],
})
export class EntidadModule { }

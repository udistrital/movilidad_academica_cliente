import { NaturalezaRoutingModule, routedComponents } from './naturaleza-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ConvenioService } from '../../@core/data/convenio.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudNaturalezaComponent } from './crud-naturaleza/crud-naturaleza.component';
import { ToasterService} from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    NaturalezaRoutingModule,
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
    CrudNaturalezaComponent,
  ],
})
export class NaturalezaModule { }

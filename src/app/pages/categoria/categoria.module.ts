import { CategoriaRoutingModule, routedComponents } from './categoria-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ConvenioService } from '../../@core/data/convenio.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ToasterModule } from 'angular2-toaster';
import { SharedModule } from '../../shared/shared.module';
import { CrudCategoriaComponent } from './crud-categoria/crud-categoria.component';
import { ToasterService} from 'angular2-toaster';

@NgModule({
  imports: [
    ThemeModule,
    CategoriaRoutingModule,
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
    CrudCategoriaComponent,
  ],
})
export class CategoriaModule { }


import { Estados } from './../../../@core/data/models/estados';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConvenioService } from '../../../@core/data/convenio.service';
import { FORM_ESTADOS } from './form-estados';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-estados',
  templateUrl: './crud-estados.component.html',
  styleUrls: ['./crud-estados.component.scss'],
})
export class CrudEstadosComponent implements OnInit {
  config: ToasterConfig;
  estados_id: number;

  @Input('estados_id')
  set name(estados_id: number) {
    this.estados_id = estados_id;
    this.loadEstados();
  }

  @Output() eventChange = new EventEmitter();

  info_estados: Estados;
  formEstados: any;
  regEstados: any;
  clean: boolean;

  constructor(private translate: TranslateService, private convenioService: ConvenioService, private toasterService: ToasterService) {
    this.formEstados = FORM_ESTADOS;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formEstados.titulo = this.translate.instant('GLOBAL.estados');
    this.formEstados.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formEstados.campos.length; i++) {
      this.formEstados.campos[i].label = this.translate.instant('GLOBAL.' + this.formEstados.campos[i].label_i18n);
      this.formEstados.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formEstados.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formEstados.campos.length; index++) {
      const element = this.formEstados.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadEstados(): void {
    if (this.estados_id !== undefined && this.estados_id !== 0) {
      this.convenioService.get('estados/?query=id:' + this.estados_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_estados = <Estados>res[0];
          }
        });
    } else  {
      this.info_estados = undefined;
      this.clean = !this.clean;
    }
  }

  updateEstados(estados: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Estados!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_estados = <Estados>estados;
        this.convenioService.put('estados', this.info_estados)
          .subscribe(res => {
            this.loadEstados();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Estados updated');
          });
      }
    });
  }

  createEstados(estados: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Estados!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_estados = <Estados>estados;
        this.convenioService.post('estados', this.info_estados)
          .subscribe(res => {
            this.info_estados = <Estados>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Estados created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadEstados();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_estados === undefined) {
        this.createEstados(event.data.Estados);
      } else {
        this.updateEstados(event.data.Estados);
      }
    }
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center'
      positionClass: 'toast-top-center',
      timeout: 5000,  // ms
      newestOnTop: true,
      tapToDismiss: false, // hide on click
      preventDuplicates: true,
      animation: 'slideDown', // 'fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'
      limit: 5,
    });
    const toast: Toast = {
      type: type, // 'default', 'info', 'success', 'warning', 'error'
      title: title,
      body: body,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

}

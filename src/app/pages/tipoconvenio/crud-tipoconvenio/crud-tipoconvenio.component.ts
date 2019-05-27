
import { Tipoconvenio } from './../../../@core/data/models/tipoconvenio';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_TIPOCONVENIO } from './form-tipoconvenio';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-tipoconvenio',
  templateUrl: './crud-tipoconvenio.component.html',
  styleUrls: ['./crud-tipoconvenio.component.scss'],
})
export class CrudTipoconvenioComponent implements OnInit {
  config: ToasterConfig;
  tipoconvenio_id: number;

  @Input('tipoconvenio_id')
  set name(tipoconvenio_id: number) {
    this.tipoconvenio_id = tipoconvenio_id;
    this.loadTipoconvenio();
  }

  @Output() eventChange = new EventEmitter();

  info_tipoconvenio: Tipoconvenio;
  formTipoconvenio: any;
  regTipoconvenio: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formTipoconvenio = FORM_TIPOCONVENIO;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formTipoconvenio.titulo = this.translate.instant('GLOBAL.tipoconvenio');
    this.formTipoconvenio.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formTipoconvenio.campos.length; i++) {
      this.formTipoconvenio.campos[i].label = this.translate.instant('GLOBAL.' + this.formTipoconvenio.campos[i].label_i18n);
      this.formTipoconvenio.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formTipoconvenio.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formTipoconvenio.campos.length; index++) {
      const element = this.formTipoconvenio.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadTipoconvenio(): void {
    if (this.tipoconvenio_id !== undefined && this.tipoconvenio_id !== 0) {
      this.movilidadAcademicaService.get('tipoconvenio/?query=id:' + this.tipoconvenio_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_tipoconvenio = <Tipoconvenio>res[0];
          }
        });
    } else  {
      this.info_tipoconvenio = undefined;
      this.clean = !this.clean;
    }
  }

  updateTipoconvenio(tipoconvenio: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Tipoconvenio!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipoconvenio = <Tipoconvenio>tipoconvenio;
        this.movilidadAcademicaService.put('tipoconvenio', this.info_tipoconvenio)
          .subscribe(res => {
            this.loadTipoconvenio();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Tipoconvenio updated');
          });
      }
    });
  }

  createTipoconvenio(tipoconvenio: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Tipoconvenio!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipoconvenio = <Tipoconvenio>tipoconvenio;
        this.movilidadAcademicaService.post('tipoconvenio', this.info_tipoconvenio)
          .subscribe(res => {
            this.info_tipoconvenio = <Tipoconvenio>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Tipoconvenio created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadTipoconvenio();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_tipoconvenio === undefined) {
        this.createTipoconvenio(event.data.Tipoconvenio);
      } else {
        this.updateTipoconvenio(event.data.Tipoconvenio);
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

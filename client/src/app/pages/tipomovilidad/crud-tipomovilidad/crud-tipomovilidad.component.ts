
import { Tipomovilidad } from './../../../@core/data/models/tipomovilidad';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_TIPOMOVILIDAD } from './form-tipomovilidad';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-tipomovilidad',
  templateUrl: './crud-tipomovilidad.component.html',
  styleUrls: ['./crud-tipomovilidad.component.scss'],
})
export class CrudTipomovilidadComponent implements OnInit {
  config: ToasterConfig;
  tipomovilidad_id: number;

  @Input('tipomovilidad_id')
  set name(tipomovilidad_id: number) {
    this.tipomovilidad_id = tipomovilidad_id;
    this.loadTipomovilidad();
  }

  @Output() eventChange = new EventEmitter();

  info_tipomovilidad: Tipomovilidad;
  formTipomovilidad: any;
  regTipomovilidad: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formTipomovilidad = FORM_TIPOMOVILIDAD;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formTipomovilidad.titulo = this.translate.instant('GLOBAL.tipomovilidad');
    this.formTipomovilidad.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formTipomovilidad.campos.length; i++) {
      this.formTipomovilidad.campos[i].label = this.translate.instant('GLOBAL.' + this.formTipomovilidad.campos[i].label_i18n);
      this.formTipomovilidad.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formTipomovilidad.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formTipomovilidad.campos.length; index++) {
      const element = this.formTipomovilidad.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadTipomovilidad(): void {
    if (this.tipomovilidad_id !== undefined && this.tipomovilidad_id !== 0) {
      this.movilidadAcademicaService.get('tipomovilidad/?query=id:' + this.tipomovilidad_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_tipomovilidad = <Tipomovilidad>res[0];
          }
        });
    } else  {
      this.info_tipomovilidad = undefined;
      this.clean = !this.clean;
    }
  }

  updateTipomovilidad(tipomovilidad: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Tipomovilidad!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipomovilidad = <Tipomovilidad>tipomovilidad;
        this.movilidadAcademicaService.put('tipomovilidad', this.info_tipomovilidad)
          .subscribe(res => {
            this.loadTipomovilidad();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Tipomovilidad updated');
          });
      }
    });
  }

  createTipomovilidad(tipomovilidad: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Tipomovilidad!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipomovilidad = <Tipomovilidad>tipomovilidad;
        this.movilidadAcademicaService.post('tipomovilidad', this.info_tipomovilidad)
          .subscribe(res => {
            this.info_tipomovilidad = <Tipomovilidad>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Tipomovilidad created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadTipomovilidad();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_tipomovilidad === undefined) {
        this.createTipomovilidad(event.data.Tipomovilidad);
      } else {
        this.updateTipomovilidad(event.data.Tipomovilidad);
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

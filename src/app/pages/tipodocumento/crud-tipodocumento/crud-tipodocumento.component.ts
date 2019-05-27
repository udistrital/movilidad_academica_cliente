
import { Tipodocumento } from './../../../@core/data/models/tipodocumento';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_TIPODOCUMENTO } from './form-tipodocumento';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-tipodocumento',
  templateUrl: './crud-tipodocumento.component.html',
  styleUrls: ['./crud-tipodocumento.component.scss'],
})
export class CrudTipodocumentoComponent implements OnInit {
  config: ToasterConfig;
  tipodocumento_id: number;

  @Input('tipodocumento_id')
  set name(tipodocumento_id: number) {
    this.tipodocumento_id = tipodocumento_id;
    this.loadTipodocumento();
  }

  @Output() eventChange = new EventEmitter();

  info_tipodocumento: Tipodocumento;
  formTipodocumento: any;
  regTipodocumento: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formTipodocumento = FORM_TIPODOCUMENTO;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formTipodocumento.titulo = this.translate.instant('GLOBAL.tipodocumento');
    this.formTipodocumento.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formTipodocumento.campos.length; i++) {
      this.formTipodocumento.campos[i].label = this.translate.instant('GLOBAL.' + this.formTipodocumento.campos[i].label_i18n);
      this.formTipodocumento.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formTipodocumento.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formTipodocumento.campos.length; index++) {
      const element = this.formTipodocumento.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadTipodocumento(): void {
    if (this.tipodocumento_id !== undefined && this.tipodocumento_id !== 0) {
      this.movilidadAcademicaService.get('tipodocumento/?query=id:' + this.tipodocumento_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_tipodocumento = <Tipodocumento>res[0];
          }
        });
    } else  {
      this.info_tipodocumento = undefined;
      this.clean = !this.clean;
    }
  }

  updateTipodocumento(tipodocumento: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Tipodocumento!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipodocumento = <Tipodocumento>tipodocumento;
        this.movilidadAcademicaService.put('tipodocumento', this.info_tipodocumento)
          .subscribe(res => {
            this.loadTipodocumento();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Tipodocumento updated');
          });
      }
    });
  }

  createTipodocumento(tipodocumento: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Tipodocumento!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipodocumento = <Tipodocumento>tipodocumento;
        this.movilidadAcademicaService.post('tipodocumento', this.info_tipodocumento)
          .subscribe(res => {
            this.info_tipodocumento = <Tipodocumento>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Tipodocumento created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadTipodocumento();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_tipodocumento === undefined) {
        this.createTipodocumento(event.data.Tipodocumento);
      } else {
        this.updateTipodocumento(event.data.Tipodocumento);
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

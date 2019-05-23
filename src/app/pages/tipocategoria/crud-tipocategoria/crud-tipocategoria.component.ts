
import { Tipocategoria } from './../../../@core/data/models/tipocategoria';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_TIPOCATEGORIA } from './form-tipocategoria';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-tipocategoria',
  templateUrl: './crud-tipocategoria.component.html',
  styleUrls: ['./crud-tipocategoria.component.scss'],
})
export class CrudTipocategoriaComponent implements OnInit {
  config: ToasterConfig;
  tipocategoria_id: number;

  @Input('tipocategoria_id')
  set name(tipocategoria_id: number) {
    this.tipocategoria_id = tipocategoria_id;
    this.loadTipocategoria();
  }

  @Output() eventChange = new EventEmitter();

  info_tipocategoria: Tipocategoria;
  formTipocategoria: any;
  regTipocategoria: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formTipocategoria = FORM_TIPOCATEGORIA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formTipocategoria.titulo = this.translate.instant('GLOBAL.tipocategoria');
    this.formTipocategoria.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formTipocategoria.campos.length; i++) {
      this.formTipocategoria.campos[i].label = this.translate.instant('GLOBAL.' + this.formTipocategoria.campos[i].label_i18n);
      this.formTipocategoria.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formTipocategoria.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formTipocategoria.campos.length; index++) {
      const element = this.formTipocategoria.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadTipocategoria(): void {
    if (this.tipocategoria_id !== undefined && this.tipocategoria_id !== 0) {
      this.movilidadAcademicaService.get('tipocategoria/?query=id:' + this.tipocategoria_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_tipocategoria = <Tipocategoria>res[0];
          }
        });
    } else  {
      this.info_tipocategoria = undefined;
      this.clean = !this.clean;
    }
  }

  updateTipocategoria(tipocategoria: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Tipocategoria!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipocategoria = <Tipocategoria>tipocategoria;
        this.movilidadAcademicaService.put('tipocategoria', this.info_tipocategoria)
          .subscribe(res => {
            this.loadTipocategoria();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Tipocategoria updated');
          });
      }
    });
  }

  createTipocategoria(tipocategoria: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Tipocategoria!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_tipocategoria = <Tipocategoria>tipocategoria;
        this.movilidadAcademicaService.post('tipocategoria', this.info_tipocategoria)
          .subscribe(res => {
            this.info_tipocategoria = <Tipocategoria>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Tipocategoria created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadTipocategoria();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_tipocategoria === undefined) {
        this.createTipocategoria(event.data.Tipocategoria);
      } else {
        this.updateTipocategoria(event.data.Tipocategoria);
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


import { Nivelacademico } from './../../../@core/data/models/nivelacademico';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_NIVELACADEMICO } from './form-nivelacademico';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-nivelacademico',
  templateUrl: './crud-nivelacademico.component.html',
  styleUrls: ['./crud-nivelacademico.component.scss'],
})
export class CrudNivelacademicoComponent implements OnInit {
  config: ToasterConfig;
  nivelacademico_id: number;

  @Input('nivelacademico_id')
  set name(nivelacademico_id: number) {
    this.nivelacademico_id = nivelacademico_id;
    this.loadNivelacademico();
  }

  @Output() eventChange = new EventEmitter();

  info_nivelacademico: Nivelacademico;
  formNivelacademico: any;
  regNivelacademico: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formNivelacademico = FORM_NIVELACADEMICO;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formNivelacademico.titulo = this.translate.instant('GLOBAL.nivelacademico');
    this.formNivelacademico.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formNivelacademico.campos.length; i++) {
      this.formNivelacademico.campos[i].label = this.translate.instant('GLOBAL.' + this.formNivelacademico.campos[i].label_i18n);
      this.formNivelacademico.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formNivelacademico.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formNivelacademico.campos.length; index++) {
      const element = this.formNivelacademico.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadNivelacademico(): void {
    if (this.nivelacademico_id !== undefined && this.nivelacademico_id !== 0) {
      this.movilidadAcademicaService.get('nivelacademico/?query=id:' + this.nivelacademico_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_nivelacademico = <Nivelacademico>res[0];
          }
        });
    } else  {
      this.info_nivelacademico = undefined;
      this.clean = !this.clean;
    }
  }

  updateNivelacademico(nivelacademico: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Nivelacademico!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_nivelacademico = <Nivelacademico>nivelacademico;
        this.movilidadAcademicaService.put('nivelacademico', this.info_nivelacademico)
          .subscribe(res => {
            this.loadNivelacademico();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Nivelacademico updated');
          });
      }
    });
  }

  createNivelacademico(nivelacademico: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Nivelacademico!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_nivelacademico = <Nivelacademico>nivelacademico;
        this.movilidadAcademicaService.post('nivelacademico', this.info_nivelacademico)
          .subscribe(res => {
            this.info_nivelacademico = <Nivelacademico>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Nivelacademico created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadNivelacademico();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_nivelacademico === undefined) {
        this.createNivelacademico(event.data.Nivelacademico);
      } else {
        this.updateNivelacademico(event.data.Nivelacademico);
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


import { Programaacademico } from './../../../@core/data/models/programaacademico';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_PROGRAMAACADEMICO } from './form-programaacademico';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-programaacademico',
  templateUrl: './crud-programaacademico.component.html',
  styleUrls: ['./crud-programaacademico.component.scss'],
})
export class CrudProgramaacademicoComponent implements OnInit {
  config: ToasterConfig;
  programaacademico_id: number;

  @Input('programaacademico_id')
  set name(programaacademico_id: number) {
    this.programaacademico_id = programaacademico_id;
    this.loadProgramaacademico();
  }

  @Output() eventChange = new EventEmitter();

  info_programaacademico: Programaacademico;
  formProgramaacademico: any;
  regProgramaacademico: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formProgramaacademico = FORM_PROGRAMAACADEMICO;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formProgramaacademico.titulo = this.translate.instant('GLOBAL.programaacademico');
    this.formProgramaacademico.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formProgramaacademico.campos.length; i++) {
      this.formProgramaacademico.campos[i].label = this.translate.instant('GLOBAL.' + this.formProgramaacademico.campos[i].label_i18n);
      this.formProgramaacademico.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formProgramaacademico.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formProgramaacademico.campos.length; index++) {
      const element = this.formProgramaacademico.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadProgramaacademico(): void {
    if (this.programaacademico_id !== undefined && this.programaacademico_id !== 0) {
      this.movilidadAcademicaService.get('programaacademico/?query=id:' + this.programaacademico_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_programaacademico = <Programaacademico>res[0];
          }
        });
    } else  {
      this.info_programaacademico = undefined;
      this.clean = !this.clean;
    }
  }

  updateProgramaacademico(programaacademico: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Programaacademico!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_programaacademico = <Programaacademico>programaacademico;
        this.movilidadAcademicaService.put('programaacademico', this.info_programaacademico)
          .subscribe(res => {
            this.loadProgramaacademico();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Programaacademico updated');
          });
      }
    });
  }

  createProgramaacademico(programaacademico: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Programaacademico!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_programaacademico = <Programaacademico>programaacademico;
        this.movilidadAcademicaService.post('programaacademico', this.info_programaacademico)
          .subscribe(res => {
            this.info_programaacademico = <Programaacademico>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Programaacademico created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadProgramaacademico();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_programaacademico === undefined) {
        this.createProgramaacademico(event.data.Programaacademico);
      } else {
        this.updateProgramaacademico(event.data.Programaacademico);
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

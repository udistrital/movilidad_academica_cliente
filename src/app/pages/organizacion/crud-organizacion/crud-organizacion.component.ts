
import { Organizacion } from './../../../@core/data/models/organizacion';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_ORGANIZACION } from './form-organizacion';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-organizacion',
  templateUrl: './crud-organizacion.component.html',
  styleUrls: ['./crud-organizacion.component.scss'],
})
export class CrudOrganizacionComponent implements OnInit {
  config: ToasterConfig;
  organizacion_id: number;

  @Input('organizacion_id')
  set name(organizacion_id: number) {
    this.organizacion_id = organizacion_id;
    this.loadOrganizacion();
  }

  @Output() eventChange = new EventEmitter();

  info_organizacion: Organizacion;
  formOrganizacion: any;
  regOrganizacion: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formOrganizacion = FORM_ORGANIZACION;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formOrganizacion.titulo = this.translate.instant('GLOBAL.organizacion');
    this.formOrganizacion.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formOrganizacion.campos.length; i++) {
      this.formOrganizacion.campos[i].label = this.translate.instant('GLOBAL.' + this.formOrganizacion.campos[i].label_i18n);
      this.formOrganizacion.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formOrganizacion.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formOrganizacion.campos.length; index++) {
      const element = this.formOrganizacion.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadOrganizacion(): void {
    if (this.organizacion_id !== undefined && this.organizacion_id !== 0) {
      this.movilidadAcademicaService.get('organizacion/?query=id:' + this.organizacion_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_organizacion = <Organizacion>res[0];
          }
        });
    } else  {
      this.info_organizacion = undefined;
      this.clean = !this.clean;
    }
  }

  updateOrganizacion(organizacion: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Organizacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_organizacion = <Organizacion>organizacion;
        this.movilidadAcademicaService.put('organizacion', this.info_organizacion)
          .subscribe(res => {
            this.loadOrganizacion();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Organizacion updated');
          });
      }
    });
  }

  createOrganizacion(organizacion: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Organizacion!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_organizacion = <Organizacion>organizacion;
        this.movilidadAcademicaService.post('organizacion', this.info_organizacion)
          .subscribe(res => {
            this.info_organizacion = <Organizacion>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Organizacion created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadOrganizacion();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_organizacion === undefined) {
        this.createOrganizacion(event.data.Organizacion);
      } else {
        this.updateOrganizacion(event.data.Organizacion);
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

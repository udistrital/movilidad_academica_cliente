import { Tipomovilidad } from './../../../@core/data/models/tipomovilidad';
import { Tipocategoria } from './../../../@core/data/models/tipocategoria';

import { Movilidad } from './../../../@core/data/models/movilidad';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_MOVILIDAD } from './form-movilidad';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-movilidad',
  templateUrl: './crud-movilidad.component.html',
  styleUrls: ['./crud-movilidad.component.scss'],
})
export class CrudMovilidadComponent implements OnInit {
  config: ToasterConfig;
  movilidad_id: number;

  @Input('movilidad_id')
  set name(movilidad_id: number) {
    this.movilidad_id = movilidad_id;
    this.loadMovilidad();
  }

  @Output() eventChange = new EventEmitter();

  info_movilidad: Movilidad;
  formMovilidad: any;
  regMovilidad: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formMovilidad = FORM_MOVILIDAD;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsIdtipomovilidad();
    this.loadOptionsIdtipocategoria();
   }

  construirForm() {
    this.formMovilidad.titulo = this.translate.instant('GLOBAL.movilidad');
    this.formMovilidad.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formMovilidad.campos.length; i++) {
      this.formMovilidad.campos[i].label = this.translate.instant('GLOBAL.' + this.formMovilidad.campos[i].label_i18n);
      this.formMovilidad.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formMovilidad.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsIdtipomovilidad(): void {
    let idtipomovilidad: Array<any> = [];
      this.movilidadAcademicaService.get('tipomovilidad/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            idtipomovilidad = <Array<Tipomovilidad>>res;
          }
          this.formMovilidad.campos[ this.getIndexForm('Idtipomovilidad') ].opciones = idtipomovilidad;
        });
  }
  loadOptionsIdtipocategoria(): void {
    let idtipocategoria: Array<any> = [];
      this.movilidadAcademicaService.get('tipocategoria/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            idtipocategoria = <Array<Tipocategoria>>res;
          }
          this.formMovilidad.campos[ this.getIndexForm('Idtipocategoria') ].opciones = idtipocategoria;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formMovilidad.campos.length; index++) {
      const element = this.formMovilidad.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadMovilidad(): void {
    if (this.movilidad_id !== undefined && this.movilidad_id !== 0) {
      this.movilidadAcademicaService.get('movilidad/?query=id:' + this.movilidad_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_movilidad = <Movilidad>res[0];
          }
        });
    } else  {
      this.info_movilidad = undefined;
      this.clean = !this.clean;
    }
  }

  updateMovilidad(movilidad: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Movilidad!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_movilidad = <Movilidad>movilidad;
        this.movilidadAcademicaService.put('movilidad', this.info_movilidad)
          .subscribe(res => {
            this.loadMovilidad();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Movilidad updated');
          });
      }
    });
  }

  createMovilidad(movilidad: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Movilidad!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_movilidad = <Movilidad>movilidad;
        this.movilidadAcademicaService.post('movilidad', this.info_movilidad)
          .subscribe(res => {
            this.info_movilidad = <Movilidad>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Movilidad created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadMovilidad();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_movilidad === undefined) {
        this.createMovilidad(event.data.Movilidad);
      } else {
        this.updateMovilidad(event.data.Movilidad);
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

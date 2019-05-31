import { Naturaleza } from './../../../@core/data/models/naturaleza';

import { Entidad } from './../../../@core/data/models/entidad';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConvenioService } from '../../../@core/data/convenio.service';
import { FORM_ENTIDAD } from './form-entidad';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-entidad',
  templateUrl: './crud-entidad.component.html',
  styleUrls: ['./crud-entidad.component.scss'],
})
export class CrudEntidadComponent implements OnInit {
  config: ToasterConfig;
  entidad_id: number;

  @Input('entidad_id')
  set name(entidad_id: number) {
    this.entidad_id = entidad_id;
    this.loadEntidad();
  }

  @Output() eventChange = new EventEmitter();

  info_entidad: Entidad;
  formEntidad: any;
  regEntidad: any;
  clean: boolean;

  constructor(private translate: TranslateService, private convenioService: ConvenioService, private toasterService: ToasterService) {
    this.formEntidad = FORM_ENTIDAD;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsIdnaturaleza();
   }

  construirForm() {
    this.formEntidad.titulo = this.translate.instant('GLOBAL.entidad');
    this.formEntidad.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formEntidad.campos.length; i++) {
      this.formEntidad.campos[i].label = this.translate.instant('GLOBAL.' + this.formEntidad.campos[i].label_i18n);
      this.formEntidad.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formEntidad.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsIdnaturaleza(): void {
    let idnaturaleza: Array<any> = [];
      this.convenioService.get('naturaleza/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            idnaturaleza = <Array<Naturaleza>>res;
          }
          this.formEntidad.campos[ this.getIndexForm('Idnaturaleza') ].opciones = idnaturaleza;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formEntidad.campos.length; index++) {
      const element = this.formEntidad.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadEntidad(): void {
    if (this.entidad_id !== undefined && this.entidad_id !== 0) {
      this.convenioService.get('entidad/?query=id:' + this.entidad_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_entidad = <Entidad>res[0];
          }
        });
    } else  {
      this.info_entidad = undefined;
      this.clean = !this.clean;
    }
  }

  updateEntidad(entidad: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Entidad!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_entidad = <Entidad>entidad;
        this.convenioService.put('entidad', this.info_entidad)
          .subscribe(res => {
            this.loadEntidad();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Entidad updated');
          });
      }
    });
  }

  createEntidad(entidad: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Entidad!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_entidad = <Entidad>entidad;
        this.convenioService.post('entidad', this.info_entidad)
          .subscribe(res => {
            this.info_entidad = <Entidad>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Entidad created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadEntidad();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_entidad === undefined) {
        this.createEntidad(event.data.Entidad);
      } else {
        this.updateEntidad(event.data.Entidad);
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

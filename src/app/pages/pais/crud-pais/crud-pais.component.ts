
import { Pais } from './../../../@core/data/models/pais';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_PAIS } from './form-pais';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-pais',
  templateUrl: './crud-pais.component.html',
  styleUrls: ['./crud-pais.component.scss'],
})
export class CrudPaisComponent implements OnInit {
  config: ToasterConfig;
  pais_id: number;

  @Input('pais_id')
  set name(pais_id: number) {
    this.pais_id = pais_id;
    this.loadPais();
  }

  @Output() eventChange = new EventEmitter();

  info_pais: Pais;
  formPais: any;
  regPais: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formPais = FORM_PAIS;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formPais.titulo = this.translate.instant('GLOBAL.pais');
    this.formPais.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formPais.campos.length; i++) {
      this.formPais.campos[i].label = this.translate.instant('GLOBAL.' + this.formPais.campos[i].label_i18n);
      this.formPais.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formPais.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formPais.campos.length; index++) {
      const element = this.formPais.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadPais(): void {
    if (this.pais_id !== undefined && this.pais_id !== 0) {
      this.movilidadAcademicaService.get('pais/?query=id:' + this.pais_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_pais = <Pais>res[0];
          }
        });
    } else  {
      this.info_pais = undefined;
      this.clean = !this.clean;
    }
  }

  updatePais(pais: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Pais!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_pais = <Pais>pais;
        this.movilidadAcademicaService.put('pais', this.info_pais)
          .subscribe(res => {
            this.loadPais();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Pais updated');
          });
      }
    });
  }

  createPais(pais: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Pais!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_pais = <Pais>pais;
        this.movilidadAcademicaService.post('pais', this.info_pais)
          .subscribe(res => {
            this.info_pais = <Pais>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Pais created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadPais();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_pais === undefined) {
        this.createPais(event.data.Pais);
      } else {
        this.updatePais(event.data.Pais);
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

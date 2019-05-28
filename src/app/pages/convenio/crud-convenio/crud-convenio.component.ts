import { Organizacion } from './../../../@core/data/models/organizacion';
import { Tipoconvenio } from './../../../@core/data/models/tipoconvenio';
import { Pais } from './../../../@core/data/models/pais';

import { Convenio } from './../../../@core/data/models/convenio';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { FORM_CONVENIO } from './form-convenio';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-convenio',
  templateUrl: './crud-convenio.component.html',
  styleUrls: ['./crud-convenio.component.scss'],
})
export class CrudConvenioComponent implements OnInit {
  config: ToasterConfig;
  convenio_id: number;

  @Input('convenio_id')
  set name(convenio_id: number) {
    this.convenio_id = convenio_id;
    this.loadConvenio();
  }

  @Output() eventChange = new EventEmitter();

  info_convenio: Convenio;
  formConvenio: any;
  regConvenio: any;
  clean: boolean;

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService) {
    this.formConvenio = FORM_CONVENIO;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsOrganizacion();
    this.loadOptionsTipoconvenio();
    this.loadOptionsPais();
   }

  construirForm() {
    this.formConvenio.titulo = this.translate.instant('GLOBAL.convenio');
    this.formConvenio.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formConvenio.campos.length; i++) {
      this.formConvenio.campos[i].label = this.translate.instant('GLOBAL.' + this.formConvenio.campos[i].label_i18n);
      this.formConvenio.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formConvenio.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsOrganizacion(): void {
    let organizacion: Array<any> = [];
      this.movilidadAcademicaService.get('organizacion/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            organizacion = <Array<Organizacion>>res;
          }
          this.formConvenio.campos[ this.getIndexForm('Organizacion') ].opciones = organizacion;
        });
  }
  loadOptionsTipoconvenio(): void {
    let tipoconvenio: Array<any> = [];
      this.movilidadAcademicaService.get('tipoconvenio/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            tipoconvenio = <Array<Tipoconvenio>>res;
          }
          this.formConvenio.campos[ this.getIndexForm('Tipoconvenio') ].opciones = tipoconvenio;
        });
  }
  loadOptionsPais(): void {
    let pais: Array<any> = [];
      this.movilidadAcademicaService.get('pais/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            pais = <Array<Pais>>res;
          }
          this.formConvenio.campos[ this.getIndexForm('Pais') ].opciones = pais;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formConvenio.campos.length; index++) {
      const element = this.formConvenio.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadConvenio(): void {
    if (this.convenio_id !== undefined && this.convenio_id !== 0) {
      this.movilidadAcademicaService.get('convenio/?query=id:' + this.convenio_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_convenio = <Convenio>res[0];
          }
        });
    } else  {
      this.info_convenio = undefined;
      this.clean = !this.clean;
    }
  }

  updateConvenio(convenio: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Convenio!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_convenio = <Convenio>convenio;
        this.movilidadAcademicaService.put('convenio', this.info_convenio)
          .subscribe(res => {
            this.loadConvenio();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Convenio updated');
          });
      }
    });
  }

  createConvenio(convenio: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Convenio!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_convenio = <Convenio>convenio;
        this.movilidadAcademicaService.post('convenio', this.info_convenio)
          .subscribe(res => {
            this.info_convenio = <Convenio>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Convenio created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadConvenio();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_convenio === undefined) {
        this.createConvenio(event.data.Convenio);
      } else {
        this.updateConvenio(event.data.Convenio);
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

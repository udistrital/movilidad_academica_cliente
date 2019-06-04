
import { Paiscategoria } from './../../../@core/data/models/paiscategoria';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConvenioService } from '../../../@core/data/convenio.service';
import { FORM_PAISCATEGORIA } from './form-paiscategoria';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-paiscategoria',
  templateUrl: './crud-paiscategoria.component.html',
  styleUrls: ['./crud-paiscategoria.component.scss'],
})
export class CrudPaiscategoriaComponent implements OnInit {
  config: ToasterConfig;
  paiscategoria_id: number;

  @Input('paiscategoria_id')
  set name(paiscategoria_id: number) {
    this.paiscategoria_id = paiscategoria_id;
    this.loadPaiscategoria();
  }

  @Output() eventChange = new EventEmitter();

  info_paiscategoria: Paiscategoria;
  formPaiscategoria: any;
  regPaiscategoria: any;
  clean: boolean;

  constructor(private translate: TranslateService, private convenioService: ConvenioService, private toasterService: ToasterService) {
    this.formPaiscategoria = FORM_PAISCATEGORIA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formPaiscategoria.titulo = this.translate.instant('GLOBAL.paiscategoria');
    this.formPaiscategoria.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formPaiscategoria.campos.length; i++) {
      this.formPaiscategoria.campos[i].label = this.translate.instant('GLOBAL.' + this.formPaiscategoria.campos[i].label_i18n);
      this.formPaiscategoria.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formPaiscategoria.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formPaiscategoria.campos.length; index++) {
      const element = this.formPaiscategoria.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadPaiscategoria(): void {
    if (this.paiscategoria_id !== undefined && this.paiscategoria_id !== 0) {
      this.convenioService.get('paiscategoria/?query=id:' + this.paiscategoria_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_paiscategoria = <Paiscategoria>res[0];
          }
        });
    } else  {
      this.info_paiscategoria = undefined;
      this.clean = !this.clean;
    }
  }

  updatePaiscategoria(paiscategoria: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Paiscategoria!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_paiscategoria = <Paiscategoria>paiscategoria;
        this.convenioService.put('paiscategoria', this.info_paiscategoria)
          .subscribe(res => {
            this.loadPaiscategoria();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Paiscategoria updated');
          });
      }
    });
  }

  createPaiscategoria(paiscategoria: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Paiscategoria!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_paiscategoria = <Paiscategoria>paiscategoria;
        this.convenioService.post('paiscategoria', this.info_paiscategoria)
          .subscribe(res => {
            this.info_paiscategoria = <Paiscategoria>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Paiscategoria created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadPaiscategoria();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_paiscategoria === undefined) {
        this.createPaiscategoria(event.data.Paiscategoria);
      } else {
        this.updatePaiscategoria(event.data.Paiscategoria);
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

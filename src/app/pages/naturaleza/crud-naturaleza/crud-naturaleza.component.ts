
import { Naturaleza } from './../../../@core/data/models/naturaleza';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConvenioService } from '../../../@core/data/convenio.service';
import { FORM_NATURALEZA } from './form-naturaleza';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-naturaleza',
  templateUrl: './crud-naturaleza.component.html',
  styleUrls: ['./crud-naturaleza.component.scss'],
})
export class CrudNaturalezaComponent implements OnInit {
  config: ToasterConfig;
  naturaleza_id: number;

  @Input('naturaleza_id')
  set name(naturaleza_id: number) {
    this.naturaleza_id = naturaleza_id;
    this.loadNaturaleza();
  }

  @Output() eventChange = new EventEmitter();

  info_naturaleza: Naturaleza;
  formNaturaleza: any;
  regNaturaleza: any;
  clean: boolean;

  constructor(private translate: TranslateService, private convenioService: ConvenioService, private toasterService: ToasterService) {
    this.formNaturaleza = FORM_NATURALEZA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
   }

  construirForm() {
    this.formNaturaleza.titulo = this.translate.instant('GLOBAL.naturaleza');
    this.formNaturaleza.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formNaturaleza.campos.length; i++) {
      this.formNaturaleza.campos[i].label = this.translate.instant('GLOBAL.' + this.formNaturaleza.campos[i].label_i18n);
      this.formNaturaleza.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formNaturaleza.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }


  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formNaturaleza.campos.length; index++) {
      const element = this.formNaturaleza.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadNaturaleza(): void {
    if (this.naturaleza_id !== undefined && this.naturaleza_id !== 0) {
      this.convenioService.get('naturaleza/?query=id:' + this.naturaleza_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_naturaleza = <Naturaleza>res[0];
          }
        });
    } else  {
      this.info_naturaleza = undefined;
      this.clean = !this.clean;
    }
  }

  updateNaturaleza(naturaleza: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Naturaleza!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_naturaleza = <Naturaleza>naturaleza;
        this.convenioService.put('naturaleza', this.info_naturaleza)
          .subscribe(res => {
            this.loadNaturaleza();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Naturaleza updated');
          });
      }
    });
  }

  createNaturaleza(naturaleza: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Naturaleza!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_naturaleza = <Naturaleza>naturaleza;
        this.convenioService.post('naturaleza', this.info_naturaleza)
          .subscribe(res => {
            this.info_naturaleza = <Naturaleza>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Naturaleza created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadNaturaleza();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_naturaleza === undefined) {
        this.createNaturaleza(event.data.Naturaleza);
      } else {
        this.updateNaturaleza(event.data.Naturaleza);
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

import { Paiscategoria } from './../../../@core/data/models/paiscategoria';

import { Categoria } from './../../../@core/data/models/categoria';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConvenioService } from '../../../@core/data/convenio.service';
import { FORM_CATEGORIA } from './form-categoria';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-categoria',
  templateUrl: './crud-categoria.component.html',
  styleUrls: ['./crud-categoria.component.scss'],
})
export class CrudCategoriaComponent implements OnInit {
  config: ToasterConfig;
  categoria_id: number;

  @Input('categoria_id')
  set name(categoria_id: number) {
    this.categoria_id = categoria_id;
    this.loadCategoria();
  }

  @Output() eventChange = new EventEmitter();

  info_categoria: Categoria;
  formCategoria: any;
  regCategoria: any;
  clean: boolean;

  constructor(private translate: TranslateService, private convenioService: ConvenioService, private toasterService: ToasterService) {
    this.formCategoria = FORM_CATEGORIA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    this.loadOptionsIdpaiscategoria();
   }

  construirForm() {
    this.formCategoria.titulo = this.translate.instant('GLOBAL.categoria');
    this.formCategoria.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formCategoria.campos.length; i++) {
      this.formCategoria.campos[i].label = this.translate.instant('GLOBAL.' + this.formCategoria.campos[i].label_i18n);
      this.formCategoria.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formCategoria.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadOptionsIdpaiscategoria(): void {
    let idpaiscategoria: Array<any> = [];
      this.convenioService.get('paiscategoria/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            idpaiscategoria = <Array<Paiscategoria>>res;
          }
          this.formCategoria.campos[ this.getIndexForm('Idpaiscategoria') ].opciones = idpaiscategoria;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formCategoria.campos.length; index++) {
      const element = this.formCategoria.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadCategoria(): void {
    if (this.categoria_id !== undefined && this.categoria_id !== 0) {
      this.convenioService.get('categoria/?query=id:' + this.categoria_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_categoria = <Categoria>res[0];
          }
        });
    } else  {
      this.info_categoria = undefined;
      this.clean = !this.clean;
    }
  }

  updateCategoria(categoria: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update Categoria!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_categoria = <Categoria>categoria;
        this.convenioService.put('categoria', this.info_categoria)
          .subscribe(res => {
            this.loadCategoria();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'Categoria updated');
          });
      }
    });
  }

  createCategoria(categoria: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create Categoria!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_categoria = <Categoria>categoria;
        this.convenioService.post('categoria', this.info_categoria)
          .subscribe(res => {
            this.info_categoria = <Categoria>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'Categoria created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadCategoria();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_categoria === undefined) {
        this.createCategoria(event.data.Categoria);
      } else {
        this.updateCategoria(event.data.Categoria);
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

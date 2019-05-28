import { Tipodocumento } from './../../../@core/data/models/tipodocumento';
import { Pais } from './../../../@core/data/models/pais';
import { Nivelacademico } from './../../../@core/data/models/nivelacademico';
import { Programaacademico } from './../../../@core/data/models/programaacademico';
import { Tipomovilidad } from './../../../@core/data/models/tipomovilidad';
import { Tipocategoria } from './../../../@core/data/models/tipocategoria';

import { MovilidadAcademica } from './../../../@core/data/models/movilidad_academica';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { MovilidadMidService } from '../../../@core/data/movilidad_mid.service';
import { FORM_MOVILIDAD_ACADEMICA } from './form-movilidad_academica';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-crud-movilidad',
  templateUrl: './crud-movilidad_academica.component.html',
  styleUrls: ['./crud-movilidad_academica.component.scss'],
})
export class CrudMovilidadAcademicaComponent implements OnInit {
  config: ToasterConfig;
  movilidad_academica_id: number;

  @Input('movilidad_academica_id')
  set name(movilidad_academica_id: number) {
    this.movilidad_academica_id = movilidad_academica_id;
    this.loadMovilidadAcademica();
  }

  @Output() eventChange = new EventEmitter();

  info_movilidad_academica: MovilidadAcademica;
  formMovilidadAcademica: any;
  regMovilidadAcademica: any;
  clean: boolean;

  constructor(private translate: TranslateService,
    private movilidadAcademicaService: MovilidadAcademicaService,
    private movilidadMidService: MovilidadMidService,
    private toasterService: ToasterService) {
    this.formMovilidadAcademica = FORM_MOVILIDAD_ACADEMICA;
    this.construirForm();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.construirForm();
    });
    // this.loadOptionsTipodocumento();
    // this.loadOptionsPais();
    // this.loadOptionsNivelacademico();
    // this.loadOptionsProgramaacademico();
    this.loadOptionsIdtipomovilidad();
    this.loadOptionsIdtipocategoria();
    this.cargarAcademica();
   }

  construirForm() {
    this.formMovilidadAcademica.titulo = this.translate.instant('GLOBAL.movilidad_academica');
    this.formMovilidadAcademica.btn = this.translate.instant('GLOBAL.guardar');
    for (let i = 0; i < this.formMovilidadAcademica.campos.length; i++) {
      this.formMovilidadAcademica.campos[i].label = this.translate.instant('GLOBAL.' + this.formMovilidadAcademica.campos[i].label_i18n);
      this.formMovilidadAcademica.campos[i].placeholder = this.translate.instant('GLOBAL.placeholder_' + this.formMovilidadAcademica.campos[i].label_i18n);
    }
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  // loadOptionsTipodocumento(): void {
  //   let tipodocumento: Array<any> = [];
  //     this.movilidadAcademicaService.get('tipodocumento/?limit=0')
  //       .subscribe(res => {
  //         if (res !== null) {
  //           tipodocumento = <Array<Tipodocumento>>res;
  //         }
  //         this.formMovilidadAcademica.campos[ this.getIndexForm('Tipodocumento') ].opciones = tipodocumento;
  //       });
  // }
  // loadOptionsPais(): void {
  //   let pais: Array<any> = [];
  //     this.movilidadAcademicaService.get('pais/?limit=0')
  //       .subscribe(res => {
  //         if (res !== null) {
  //           pais = <Array<Pais>>res;
  //         }
  //         this.formMovilidadAcademica.campos[ this.getIndexForm('Pais') ].opciones = pais;
  //       });
  // }
  // loadOptionsNivelacademico(): void {
  //   let nivelacademico: Array<any> = [];
  //     this.movilidadAcademicaService.get('nivelacademico/?limit=0')
  //       .subscribe(res => {
  //         if (res !== null) {
  //           nivelacademico = <Array<Nivelacademico>>res;
  //         }
  //         this.formMovilidadAcademica.campos[ this.getIndexForm('Nivelacademico') ].opciones = nivelacademico;
  //       });
  // }
  // loadOptionsProgramaacademico(): void {
  //   let programaacademico: Array<any> = [];
  //     this.movilidadAcademicaService.get('programaacademico/?limit=0')
  //       .subscribe(res => {
  //         if (res !== null) {
  //           programaacademico = <Array<Programaacademico>>res;
  //         }
  //         this.formMovilidadAcademica.campos[ this.getIndexForm('Programaacademico') ].opciones = programaacademico;
  //       });
  // }

  cargarAcademica() {
    this.movilidadMidService.get('academica/GetAcademica')
      .subscribe(res => {
        if (res !== null) {
          //  console.info(<MovilidadAcademica>res[0]);
           this.info_movilidad_academica = <MovilidadAcademica>res[0];
           this.info_movilidad_academica.Tipodocumento = res[0]['TipoDocumento']['Nombre'];
           this.info_movilidad_academica.Tipopersona = res[0]['TipoPersona'];
           this.info_movilidad_academica.Pais = res[0]['Pais']['Nombre'];
           this.info_movilidad_academica.Nivelacademico = res[0]['NivelAcademico']['Nombre'];
           this.info_movilidad_academica.Programaacademico = res[0]['ProgramaAcademico']['Nombre'];
          //  this.info_movilidad_academica.Nombre = res[0]['Nombre'];
          //  this.formMovilidadAcademica.campos[ this.getIndexForm('Nombre') ] = res[0]['Nombre'];
        }
      });
  }

  loadOptionsIdtipomovilidad(): void {
    let idtipomovilidad: Array<any> = [];
      this.movilidadAcademicaService.get('tipo_movilidad/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            idtipomovilidad = <Array<Tipomovilidad>>res;
          }
          this.formMovilidadAcademica.campos[ this.getIndexForm('Idtipomovilidad') ].opciones = idtipomovilidad;
        });
  }
  loadOptionsIdtipocategoria(): void {
    let idtipocategoria: Array<any> = [];
      this.movilidadAcademicaService.get('tipo_categoria/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            idtipocategoria = <Array<Tipocategoria>>res;
          }
          this.formMovilidadAcademica.campos[ this.getIndexForm('Idtipocategoria') ].opciones = idtipocategoria;
        });
  }

  getIndexForm(nombre: String): number {
    for (let index = 0; index < this.formMovilidadAcademica.campos.length; index++) {
      const element = this.formMovilidadAcademica.campos[index];
      if (element.nombre === nombre) {
        return index
      }
    }
    return 0;
  }


  public loadMovilidadAcademica(): void {
    if (this.movilidad_academica_id !== undefined && this.movilidad_academica_id !== 0) {
      this.movilidadAcademicaService.get('movilidad_academica/?query=id:' + this.movilidad_academica_id)
        .subscribe(res => {
          if (res !== null) {
            this.info_movilidad_academica = <MovilidadAcademica>res[0];
            this.cargarAcademica();
          }
        });
    } else  {
      // this.info_movilidad_academica = undefined;
      // this.clean = !this.clean;
      this.cargarAcademica();
    }
  }

  updateMovilidadAcademica(movilidadAcademica: any): void {

    const opt: any = {
      title: 'Update?',
      text: 'Update MovilidadAcademica!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_movilidad_academica = <MovilidadAcademica>movilidadAcademica;
        this.movilidadAcademicaService.put('movilidad_academica', this.info_movilidad_academica)
          .subscribe(res => {
            this.loadMovilidadAcademica();
            this.eventChange.emit(true);
            this.showToast('info', 'updated', 'MovilidadAcademica updated');
          });
      }
    });
  }

  createMovilidadAcademica(movilidadAcademica: any): void {
    const opt: any = {
      title: 'Create?',
      text: 'Create MovilidadAcademica!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {
      if (willDelete.value) {
        this.info_movilidad_academica = <MovilidadAcademica>movilidadAcademica;
        this.movilidadAcademicaService.post('movilidad_academica', this.info_movilidad_academica)
          .subscribe(res => {
            this.info_movilidad_academica = <MovilidadAcademica>res;
            this.eventChange.emit(true);
            this.showToast('info', 'created', 'MovilidadAcademica created');
          });
      }
    });
  }

  ngOnInit() {
    this.loadMovilidadAcademica();
  }

  validarForm(event) {
    if (event.valid) {
      if (this.info_movilidad_academica === undefined) {
        this.createMovilidadAcademica(event.data.MovilidadAcademica);
      } else {
        this.updateMovilidadAcademica(event.data.MovilidadAcademica);
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

import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { MovilidadAcademicaService } from '../../../@core/data/movilidad_academica.service';
import { MovilidadMidService } from '../../../@core/data/movilidad_mid.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';
import { Convenio } from'../../../@core/data/models/convenio'


@Component({
  selector: 'ngx-list-convenio',
  templateUrl: './list-convenio.component.html',
  styleUrls: ['./list-convenio.component.scss'],
  })
export class ListConvenioComponent implements OnInit {
  uid: number;
  cambiotab: boolean = false;
  config: ToasterConfig;
  settings: any;
  convenios: Convenio[];

  source: LocalDataSource = new LocalDataSource();

  constructor(private translate: TranslateService, private movilidadAcademicaService: MovilidadAcademicaService, private toasterService: ToasterService, private movilidadMidService: MovilidadMidService,) {
    this.loadData();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
    });
  }

  cargarCampos() {
    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      actions: {
        add: false,
        edit: false,
        delete: false,
        // custom: [{ name: 'ourVerInfo', title: '<i class="nb-person"></i>' }],
        // position: 'right'
        },
      mode: 'external',
      columns: {
        Organizacion: {
          title: this.translate.instant('GLOBAL.organizacion'),
          // type: 'Organizacion;',
          valuePrepareFunction: (value) => {            
            return value.Nombre;
          },
        },
        TipoConvenio: {
          title: this.translate.instant('GLOBAL.tipoconvenio'),
          // type: 'TipoConvenio;',
          valuePrepareFunction: (value) => {
            return value.Nombre;
          },
        },
        Pais: {
          title: this.translate.instant('GLOBAL.pais'),
          // type: 'Pais;',
          valuePrepareFunction: (value) => {
            return value.Nombre;
          },
        },
      },
    };
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadData(): void {
    this.convenios=[];
    this.movilidadMidService.get('convenio/GetConvenio')
    .subscribe((res: Convenio[]) => {
      console.log(res);
      if (Object.keys(res[0]).length > 0) {
        this.convenios = res;
        const data = <Array<any>>res;
        this.source.load(data);
      }
    }, (error) => {
      alert("Ocurrio un error cargando los equipos");
    })
      
    this.cargarCampos();    
  }

  ngOnInit() {
  }

  onEdit(event): void {
    this.uid = event.data.Id;
    this.activetab();
  }

  onCreate(event): void {
    this.uid = 0;
    this.activetab();
  }

  onDelete(event): void {
    const opt: any = {
      title: 'Deleting?',
      text: 'Delete Convenio!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
    };
    Swal(opt)
    .then((willDelete) => {

      if (willDelete.value) {
        this.movilidadAcademicaService.delete('convenio/', event.data).subscribe(res => {
          if (res !== null) {
            this.loadData();
            this.showToast('info', 'deleted', 'Convenio deleted');
            }
         });
      }
    });
  }

  activetab(): void {
    this.cambiotab = !this.cambiotab;
  }

  selectTab(event): void {
    if (event.tabTitle === this.translate.instant('GLOBAL.lista')) {
      this.cambiotab = false;
    } else {
      this.cambiotab = true;
    }
  }

  onChange(event) {
    if (event) {
      this.loadData();
      this.cambiotab = !this.cambiotab;
    }
  }


  itemselec(event): void {
    // console.log("afssaf");
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GENERAL } from '../../app-config';

const path = GENERAL.ENTORNO.CONFIGURACION_SERVICE;

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
    }),
}

@Injectable()
export class ConfiguracionService {
// export class MenuService {
  constructor(private http: HttpClient) {
  }

  get(endpoint) {
    return this.http.get<any[]>(path + endpoint, httpOptions);
  }
}

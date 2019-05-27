import { Organizacion } from './organizacion';
import { Tipoconvenio } from './tipoconvenio';
import { Pais } from './pais';

export class Convenio {
  Id: number;
  Organizacion: Array<Organizacion>;
  Tipoconvenio: Array<Tipoconvenio>;
  Pais: Array<Pais>;
}

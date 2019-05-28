import { Organizacion } from './organizacion';
import { TipoConvenio } from './tipoconvenio';
import { Pais } from './pais';

export class Convenio {
  Id: number;
  Organizacion: Array<Organizacion>;
  TipoConvenio: Array<TipoConvenio>;
  Pais: Array<Pais>;
}

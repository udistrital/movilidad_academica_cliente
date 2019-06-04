import { Paiscategoria } from './paiscategoria';
import { Entidad } from './entidad';
import { Estados } from './estados';

export class Convenio {
  Id: number;
  Descripcion: string;
  Responsable: string;
  Correoresponsable: string;
  Enlace: string;
  Idpaiscategoria: Paiscategoria;
  Identidad: Entidad;
  Idestados: Estados;

}

import { Tipomovilidad } from './tipomovilidad';
import { Tipocategoria } from './tipocategoria';

export class Movilidad {
  Id: number;
  Presupuesto: number;
  Fechainicio: Date;
  Fechafinal: Date;
  Persona: number;
  Convenio: number;
  Idtipomovilidad: Array<Tipomovilidad>;
  Idtipocategoria: Array<Tipocategoria>;
}

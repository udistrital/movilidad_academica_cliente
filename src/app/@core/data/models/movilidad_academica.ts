import { Tipodocumento } from './tipodocumento';
import { Pais } from './pais';
import { Nivelacademico } from './nivelacademico';
import { Programaacademico } from './programaacademico';
import { Tipomovilidad } from './tipomovilidad';
import { Tipocategoria } from './tipocategoria';

export class MovilidadAcademica {
  Id: number;
  Nombre: string;
  Apellido: string;
  Identificacion: number;
  Tipodocumento: Array<Tipodocumento>;
  Tipopersona: string;
  Telefono: number;
  Direccion: string;
  Pais: Array<Pais>;
  Nivelacademico: Array<Nivelacademico>;
  Programaacademico: Array<Programaacademico>;
  Entrante: boolean;
  Idtipomovilidad: Array<Tipomovilidad>;
  Fechainicio: Date;
  Fechafinal: Date;
  Idtipocategoria: Array<Tipocategoria>;
  Presupuesto: number;
  Convenio: number;
}

import { Estudiante } from "./estudiante";
import { Materia } from "./materia";

export interface Nota {
    Id: number
    PrimerCorte: number
    SegundoCorte: number
    TercerCorte: number
    NotaDefinitiva?: number
    IdEstudiante: Estudiante
    IdMateria: Materia
}
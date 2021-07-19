import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Nota } from '../../modelos/nota';
import { oneNota } from '../../modelos/oneNota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  URL_API_MID_NOTA = 'http://localhost:8081/v1/nota'

  notas: Nota[]=[];

  selectedOne: oneNota = {
    Id: 0
  }

  selectedNota: Nota = {
    Id: 0,
    PrimerCorte: 0,
    SegundoCorte: 0,
    TercerCorte: 0,
    IdEstudiante: {
      Id: 0,
      NombreEstudiante: '',
      CodigoEstudiante: '',
      Edad: 0
    },
    IdMateria: {
      Id: 0,
      NombreMateria: '',
      Creditos: 0
    }
  };

  constructor(private http: HttpClient) { }


  getAllNota() {
    return this.http.get<Nota[]>(`${this.URL_API_MID_NOTA}/1`);
  }

  getOneNota(id: oneNota) {
    let idOne = Object.values(id);
    return this.http.get<Nota[]>(`${this.URL_API_MID_NOTA}/${idOne}`);
  }

  createNota(nota: Nota) {
    console.log(nota)
    let ola = Object.values(nota);
    let ola2 = this.selectedNota;
    ola2.IdEstudiante.Id = Number(ola[0]); ola2.IdMateria.Id = Number(ola[1]); ola2.PrimerCorte = Number(ola[2])
    ola2.SegundoCorte = Number(ola[3]); ola2.TercerCorte = Number(ola[4]);
    return this.http.post(this.URL_API_MID_NOTA, ola2);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Estudiante } from 'src/app/modelos/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  URL_API_MID_ESTUDIANTE = 'http://localhost:8080/v1/estudiante'

  estudiantes: Estudiante[]=[]

  selectedEstudiante: Estudiante = {
    Id: 0,
    NombreEstudiante: '',
    CodigoEstudiante: '',
    Edad: 0
  }

  constructor(private http: HttpClient) { }

  getAllEstudiante() {
    return this.http.get<Estudiante[]>(this.URL_API_MID_ESTUDIANTE)
  }

  createEstudiante(estudiante: Estudiante) {
    let ola = Object.values(estudiante);
    let ola2 = this.selectedEstudiante;
    ola2.NombreEstudiante = ola[0]; ola2.CodigoEstudiante = ola[1]; ola2.Edad = Number(ola[2])
    return this.http.post(this.URL_API_MID_ESTUDIANTE, ola2)
  }

}

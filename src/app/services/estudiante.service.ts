import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//import * as internal from 'stream';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  NOTAS_CRUD_URL = 'http://127.0.0.1:8080/v1';
  NOTAS_MID_URL = '/v1';
  constructor(private http: HttpClient) { }

  // GET ESTUDIANTES
  getEstudiantes(){
    return this.http.get(this.NOTAS_CRUD_URL + "/estudiante");
  }

  // GET ESTUDIANTE BY ID
  getEstudianteById(id: number){
    return this.http.get(this.NOTAS_CRUD_URL + '/estudiante/' + id)
  }

  // AGREGAR ESTUDIANTE
  agregarEstudiante(estudiante: Estudiante){
    return this.http.post(this.NOTAS_MID_URL + '/boletin/guardar_boletin', estudiante)
  }

  //ELIMINAR ESTUDIANTE
  eliminarEstudiante(id: string){
    return this.http.delete(this.NOTAS_CRUD_URL + '/estudiante/' + id)
  }

  //ACTUALIZAR ESTUDIANTE
  actualizarEstudiante(id: number, estudiante : Estudiante){
    return this.http.put(this.NOTAS_MID_URL + '/boletin/modificar_boletin', estudiante)
  }


}

export interface Estudiante{
  Id?: string,
  Nombre: string,
  Apellido: string,
  PrimeraNota?: number,
  SegundaNota?: number,
  TerceraNota?: number,
  Definitiva?: number
}

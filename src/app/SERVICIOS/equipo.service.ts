import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url='http://localhost:8080/v1/estudiante';
  constructor(private http: HttpClient) { }

  //get estudiante
  getEstudiante(){
    return this.http.get(this.url);
  }

  //get un estudiante
  getUnEstudiante(id:string){
    return  this.http.get(this.url+'/'+id);
  }

  //agregar un estudiante
  addEstudiante(estudiante:Estudiante){
    console.log(estudiante);
    return this.http.post(this.url, estudiante);
  }

  //eliminar un estudiante
  deleteEstudiante(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //actualizar un estudiante
  editEstudiante(id:String, estudiante:Estudiante){
    return this.http.put(this.url+'/'+id, estudiante);
  }
  
}

export interface Estudiante{
  id?:string;
  nombre?:string;
  primer_nota?:string;
  segunda_nota?:string;
  tercer_nota?:string;
  definitiva?:string;
}

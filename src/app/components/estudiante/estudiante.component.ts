import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstudianteService } from 'src/app/servicios/estudiante/estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  constructor(public estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.getAllEstudiante();
  }

  getAllEstudiante() {
    this.estudianteService.getAllEstudiante().subscribe(
      res => {
        console.log(Object.values(res));
        this.estudianteService.estudiantes = res;
      },
      err => console.error(err)
    );
  }

  addEstudiante(form: NgForm) {
    this.estudianteService.createEstudiante(form.value).subscribe(
      res => {
        this.getAllEstudiante();
        form.reset();
        console.log(res)
      },
      err => console.error(err)
    )
  }

}

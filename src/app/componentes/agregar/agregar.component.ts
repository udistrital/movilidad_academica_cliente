import { Component, OnInit } from '@angular/core';
import { Estudiante, EstudianteService} from '../../services/estudiante.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  estudiante: Estudiante={
    Id:'',
    Nombre:'',
    Apellido:'',
    PrimeraNota: 0,
    SegundaNota: 0,
    TerceraNota: 0

  }
  
  constructor( private EstudianteService: EstudianteService, private router: Router) { }

  ngOnInit(): void {
  }


  agregar(){
    delete this.estudiante.Id;
    console.log(this.estudiante)
    this.EstudianteService.agregarEstudiante(this.estudiante).subscribe();
    this.router.navigate(['/inicio'])
  }
}

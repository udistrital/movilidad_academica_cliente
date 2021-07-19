import { Component, OnInit } from '@angular/core';
import { Estudiante, EstudianteService} from '../../services/estudiante.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  estudiante: Estudiante={
    Id:'',
    Nombre:'',
    Apellido:'',
    PrimeraNota: 0,
    SegundaNota: 0,
    TerceraNota: 0

  }

  constructor( private EstudianteService: EstudianteService,
               private router: Router,
               private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada: number =+ <string> this.activeRoute.snapshot.params.id;
    
    console.log('Id de entrada: ' + id_entrada);

    if(id_entrada){
      this.EstudianteService.getEstudianteById(id_entrada).subscribe(
        res => {
          this.estudiante = <any> res
        },
        err =>{
          console.log(err)
        }
      )
    }
  }


  actualizar(){
    const id_actualizar: number =+ <any> this.estudiante.Id;
    this.EstudianteService.actualizarEstudiante( id_actualizar, this.estudiante).subscribe(
      res => console.log(res),
      err => console.log(err)
    )

    this.router.navigate(['/inicio']);
  }
}

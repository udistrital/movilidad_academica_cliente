import { Component, OnInit } from '@angular/core';
import { EstudianteService, Estudiante } from '../../services/estudiante.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  //variable
  ListarEstudiante: Estudiante[];


  constructor(private EstudianteService: EstudianteService, private router: Router) {
    this.ListarEstudiante = [];
   }

  ngOnInit(): void {
    this.listarEstudiante();
  }


  listarEstudiante(){
    this.EstudianteService.getEstudiantes().subscribe(
      res => {
        console.log(res)
        this.ListarEstudiante = <any> res;
      },
      err => console.log(err)
    );
  }

  eliminar(id: any){
    this.EstudianteService.eliminarEstudiante(id).subscribe(
      res => {
        console.log('Estudiante eliminado');
        this.listarEstudiante();
      },
      err => {
        console.log(err);
      }
    )
  }

  actualizar(id: any){
    this.router.navigate(['/edit/' + id]);
  }

}

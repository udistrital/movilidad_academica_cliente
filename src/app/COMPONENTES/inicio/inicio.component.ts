import { Component, OnInit } from '@angular/core';
import { EquipoService, Estudiante } from '../../SERVICIOS/equipo.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  //variables
  ListarEstudiante: Estudiante[];
  constructor(private Equiposervice:EquipoService, private router:Router) { 
    this.ListarEstudiante = [];
  }

  ngOnInit(): void {
    this.listarEquipo();
  }

  listarEquipo(){
    this.Equiposervice.getEstudiante().subscribe(
      res=>{
        console.log(res)
        this.ListarEstudiante=<Estudiante[]>res;
        console.log(this.ListarEstudiante)
      },
      err => console.log(err)
    )
  }

  eliminar(id:string){
    this.Equiposervice.deleteEstudiante(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarEquipo();
      },
      err=> console.log(err)
    );
  }

  modificar(id:string){
    this.router.navigate(['/edit/'+id]);
  }

}

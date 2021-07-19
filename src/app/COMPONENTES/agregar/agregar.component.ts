import { Component, OnInit } from '@angular/core';
import { EquipoService, Estudiante } from 'src/app/SERVICIOS/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  estudiante: Estudiante={
    id:'',
    nombre:'',
    primer_nota:'',
    segunda_nota:'',
    tercer_nota:'',
    definitiva:''
  };

  constructor(private EquipoService:EquipoService,private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.estudiante.id;
    this.EquipoService.addEstudiante(this.estudiante).subscribe();
    this.router.navigate(['/inicio']);
  }

}

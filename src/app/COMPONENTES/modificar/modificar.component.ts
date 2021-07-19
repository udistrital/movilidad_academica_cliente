import { Component, OnInit } from '@angular/core';
import { EquipoService, Estudiante } from 'src/app/SERVICIOS/equipo.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  estudiante: Estudiante={
    id:'',
    nombre:'',
    primer_nota:'',
    segunda_nota:'',
    tercer_nota:'',
    definitiva:''
  };

  constructor(private EquipoService:EquipoService,private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = this.activeRoute.snapshot.params.id;
    console.log("id de entrada: "+id_entrada);

    if(id_entrada){
      this.EquipoService.getUnEstudiante(id_entrada).subscribe(
        res=>{
          this.estudiante = res;
          console.log(res);
        },
        err=>console.log(err)
      );
    }
  }

  /*modificar(){
    this.EquipoService.editEstudiante(this.estudiante.id,this.estudiante).subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    );
    this.router.navigate(['/inicio']);
  }*/

}

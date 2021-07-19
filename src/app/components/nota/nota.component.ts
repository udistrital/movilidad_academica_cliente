import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotaService } from '../../servicios/nota/nota.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  constructor(public notaService: NotaService) { }

  ngOnInit(): void {
    this.getAllNota();
  }

  getAllNota() {
    this.notaService.getAllNota().subscribe(
      res => {
        console.log(res);
        this.notaService.notas = Object.values(res);
      },
      err => console.error(err)
    )
  }

  getOneNota(form: NgForm) {
    this.notaService.getOneNota(form.value).subscribe(
      res => {
        console.log(res);
        this.notaService.notas = Object.values(res);
      },
      err => console.error(err)
    )
  }

  addNota(form: NgForm) {
    this.notaService.createNota(form.value).subscribe(
      res => {
        this.getAllNota();
        form.reset();
        console.log(res);
      },
      err => console.error(err)
    )
  }

}

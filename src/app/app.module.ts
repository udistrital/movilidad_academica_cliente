import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NotaComponent } from './components/nota/nota.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { MateriaComponent } from './components/materia/materia.component';

@NgModule({
  declarations: [
    AppComponent,
    NotaComponent,
    EstudianteComponent,
    MateriaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

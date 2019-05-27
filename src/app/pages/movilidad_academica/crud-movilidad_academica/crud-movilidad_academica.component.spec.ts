/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrudMovilidadAcademicaComponent } from './crud-movilidad_academica.component';

describe('CrudMovilidadAcademicaComponent', () => {
  let component: CrudMovilidadAcademicaComponent;
  let fixture: ComponentFixture<CrudMovilidadAcademicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudMovilidadAcademicaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMovilidadAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

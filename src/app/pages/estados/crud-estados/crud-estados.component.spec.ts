/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrudEstadosComponent } from './crud-estados.component';

describe('CrudEstadosComponent', () => {
  let component: CrudEstadosComponent;
  let fixture: ComponentFixture<CrudEstadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEstadosComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

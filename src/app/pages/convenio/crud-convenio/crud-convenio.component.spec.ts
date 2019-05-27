/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrudConvenioComponent } from './crud-convenio.component';

describe('CrudConvenioComponent', () => {
  let component: CrudConvenioComponent;
  let fixture: ComponentFixture<CrudConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudConvenioComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListNaturalezaComponent } from './list-naturaleza.component';

describe('ListNaturalezaComponent', () => {
  let component: ListNaturalezaComponent;
  let fixture: ComponentFixture<ListNaturalezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNaturalezaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNaturalezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListPaisComponent } from './list-pais.component';

describe('ListPaisComponent', () => {
  let component: ListPaisComponent;
  let fixture: ComponentFixture<ListPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPaisComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

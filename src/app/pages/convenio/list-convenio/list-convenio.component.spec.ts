/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListConvenioComponent } from './list-convenio.component';

describe('ListConvenioComponent', () => {
  let component: ListConvenioComponent;
  let fixture: ComponentFixture<ListConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConvenioComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

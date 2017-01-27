/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditRentalComponent } from './edit-rental.component';

describe('EditRentalComponent', () => {
  let component: EditRentalComponent;
  let fixture: ComponentFixture<EditRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

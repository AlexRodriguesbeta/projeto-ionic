import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInternoPage } from './modal-interno.page';

describe('ModalInternoPage', () => {
  let component: ModalInternoPage;
  let fixture: ComponentFixture<ModalInternoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInternoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInternoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

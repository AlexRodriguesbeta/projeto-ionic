import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextareaPage } from './input-textarea.page';

describe('InputTextareaPage', () => {
  let component: InputTextareaPage;
  let fixture: ComponentFixture<InputTextareaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextareaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

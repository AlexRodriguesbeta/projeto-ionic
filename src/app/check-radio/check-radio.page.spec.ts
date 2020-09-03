import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRadioPage } from './check-radio.page';

describe('CheckRadioPage', () => {
  let component: CheckRadioPage;
  let fixture: ComponentFixture<CheckRadioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRadioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

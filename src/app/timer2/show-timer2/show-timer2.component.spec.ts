import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimer2Component } from './show-timer2.component';

describe('ShowTimer2Component', () => {
  let component: ShowTimer2Component;
  let fixture: ComponentFixture<ShowTimer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTimer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTimer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

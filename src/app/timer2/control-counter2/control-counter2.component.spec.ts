import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCounter2Component } from './control-counter2.component';

describe('ControlCounter2Component', () => {
  let component: ControlCounter2Component;
  let fixture: ComponentFixture<ControlCounter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlCounter2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCounter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

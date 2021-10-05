import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppingStonesListFormComponent } from './stepping-stones-form.component';

describe('SteppingStonesListFormComponent', () => {
  let component: SteppingStonesListFormComponent;
  let fixture: ComponentFixture<SteppingStonesListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteppingStonesListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppingStonesListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

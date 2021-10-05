import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppingStonesListAddComponent } from './stepping-stones-add.component';

describe('SteppingStonesListAddComponent', () => {
  let component: SteppingStonesListAddComponent;
  let fixture: ComponentFixture<SteppingStonesListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteppingStonesListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppingStonesListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

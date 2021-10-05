import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppingStonesListListComponent } from './stepping-stones-list-list.component';

describe('SteppingStonesListListComponent', () => {
  let component: SteppingStonesListListComponent;
  let fixture: ComponentFixture<SteppingStonesListListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteppingStonesListListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppingStonesListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

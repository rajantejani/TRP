import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePiracyReportFormComponent } from './online-piracy-report-form.component';

describe('OnlinePiracyReportFormComponent', () => {
  let component: OnlinePiracyReportFormComponent;
  let fixture: ComponentFixture<OnlinePiracyReportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinePiracyReportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePiracyReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

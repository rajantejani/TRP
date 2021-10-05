import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPrivacyComponent } from './report-privacy.component';

describe('ReportPrivacyComponent', () => {
  let component: ReportPrivacyComponent;
  let fixture: ComponentFixture<ReportPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

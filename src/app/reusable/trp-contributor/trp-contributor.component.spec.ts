import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpContributorComponent } from './trp-contributor.component';

describe('TrpContributorComponent', () => {
  let component: TrpContributorComponent;
  let fixture: ComponentFixture<TrpContributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrpContributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrpContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

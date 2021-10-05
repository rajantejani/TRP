import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpHeadComponent } from './trp-head.component';

describe('TrpHeadComponent', () => {
  let component: TrpHeadComponent;
  let fixture: ComponentFixture<TrpHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrpHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrpHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

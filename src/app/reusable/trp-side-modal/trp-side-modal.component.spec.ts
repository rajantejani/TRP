import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpSideModalComponent } from './trp-side-modal.component';

describe('TrpSideModalComponent', () => {
  let component: TrpSideModalComponent;
  let fixture: ComponentFixture<TrpSideModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrpSideModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrpSideModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

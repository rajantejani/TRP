import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpContributerCardComponent } from './trp-contributer-card.component';

describe('TrpContributerCardComponent', () => {
  let component: TrpContributerCardComponent;
  let fixture: ComponentFixture<TrpContributerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrpContributerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrpContributerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

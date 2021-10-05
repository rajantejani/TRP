import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpEditorialComponent } from './trp-editorial.component';

describe('TrpEditorialComponent', () => {
  let component: TrpEditorialComponent;
  let fixture: ComponentFixture<TrpEditorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrpEditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrpEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

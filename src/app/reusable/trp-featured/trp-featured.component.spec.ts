import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpFeaturedComponent } from './trp-featured.component';

describe('TrpFeaturedComponent', () => {
  let component: TrpFeaturedComponent;
  let fixture: ComponentFixture<TrpFeaturedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrpFeaturedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrpFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

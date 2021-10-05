import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSelectionComponent } from './banner-selection.component';

describe('BannerSelectionComponent', () => {
  let component: BannerSelectionComponent;
  let fixture: ComponentFixture<BannerSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

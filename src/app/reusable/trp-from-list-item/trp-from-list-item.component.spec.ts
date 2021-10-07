import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpFromListItemComponent } from './trp-from-list-item.component';

describe('TrpFromListItemComponent', () => {
  let component: TrpFromListItemComponent;
  let fixture: ComponentFixture<TrpFromListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrpFromListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrpFromListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

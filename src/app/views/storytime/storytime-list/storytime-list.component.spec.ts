import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorytimeListComponent } from './storytime-list.component';

describe('StorytimeListComponent', () => {
  let component: StorytimeListComponent;
  let fixture: ComponentFixture<StorytimeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorytimeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorytimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

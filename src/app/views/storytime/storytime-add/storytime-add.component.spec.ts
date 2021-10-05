import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorytimeAddComponent } from './storytime-add.component';

describe('StorytimeAddComponent', () => {
  let component: StorytimeAddComponent;
  let fixture: ComponentFixture<StorytimeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorytimeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorytimeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

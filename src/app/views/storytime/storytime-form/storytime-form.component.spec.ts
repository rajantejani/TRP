import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorytimeFormComponent } from './storytime-form.component';

describe('StorytimeFormComponent', () => {
  let component: StorytimeFormComponent;
  let fixture: ComponentFixture<StorytimeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorytimeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorytimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

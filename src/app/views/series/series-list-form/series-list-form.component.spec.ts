import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesListFormComponent } from './series-list-form.component';

describe('SeriesListFormComponent', () => {
  let component: SeriesListFormComponent;
  let fixture: ComponentFixture<SeriesListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesAddComponent } from './series-add.component';

describe('SeriesAddComponent', () => {
  let component: SeriesAddComponent;
  let fixture: ComponentFixture<SeriesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialTeamComponent } from './editorial-team.component';

describe('EditorialTeamComponent', () => {
  let component: EditorialTeamComponent;
  let fixture: ComponentFixture<EditorialTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

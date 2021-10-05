import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationTeamComponent } from './administration-team.component';

describe('AdministrationTeamComponent', () => {
  let component: AdministrationTeamComponent;
  let fixture: ComponentFixture<AdministrationTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

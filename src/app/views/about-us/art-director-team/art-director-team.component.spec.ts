import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDirectorTeamComponent } from './art-director-team.component';

describe('ArtDirectorTeamComponent', () => {
  let component: ArtDirectorTeamComponent;
  let fixture: ComponentFixture<ArtDirectorTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtDirectorTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtDirectorTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationTeamComponent } from './animation-team.component';

describe('AnimationTeamComponent', () => {
  let component: AnimationTeamComponent;
  let fixture: ComponentFixture<AnimationTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

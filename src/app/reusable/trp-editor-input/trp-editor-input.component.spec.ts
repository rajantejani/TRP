import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrpEditorInputComponent } from './trp-editor-input.component';

describe('TrpEditorInputComponent', () => {
  let component: TrpEditorInputComponent;
  let fixture: ComponentFixture<TrpEditorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrpEditorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrpEditorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

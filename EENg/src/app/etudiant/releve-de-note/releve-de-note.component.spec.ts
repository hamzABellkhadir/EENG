import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveDeNoteComponent } from './releve-de-note.component';

describe('ReleveDeNoteComponent', () => {
  let component: ReleveDeNoteComponent;
  let fixture: ComponentFixture<ReleveDeNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleveDeNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveDeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

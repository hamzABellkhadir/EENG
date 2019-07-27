import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveNoteTabComponent } from './releve-note-tab.component';

describe('ReleveNoteTabComponent', () => {
  let component: ReleveNoteTabComponent;
  let fixture: ComponentFixture<ReleveNoteTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleveNoteTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleveNoteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

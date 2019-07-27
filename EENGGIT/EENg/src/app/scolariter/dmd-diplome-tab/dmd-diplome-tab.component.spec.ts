import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmdDiplomeTabComponent } from './dmd-diplome-tab.component';

describe('DmdDiplomeTabComponent', () => {
  let component: DmdDiplomeTabComponent;
  let fixture: ComponentFixture<DmdDiplomeTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmdDiplomeTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmdDiplomeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

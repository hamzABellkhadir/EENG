import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmdStageTabComponent } from './dmd-stage-tab.component';

describe('DmdStageTabComponent', () => {
  let component: DmdStageTabComponent;
  let fixture: ComponentFixture<DmdStageTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmdStageTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmdStageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

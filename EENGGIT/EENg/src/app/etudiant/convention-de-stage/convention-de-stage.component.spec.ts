import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConventionDeStageComponent } from './convention-de-stage.component';

describe('ConventionDeStageComponent', () => {
  let component: ConventionDeStageComponent;
  let fixture: ComponentFixture<ConventionDeStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConventionDeStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConventionDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

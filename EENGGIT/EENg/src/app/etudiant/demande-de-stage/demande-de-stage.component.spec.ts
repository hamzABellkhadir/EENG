import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeStageComponent } from './demande-de-stage.component';

describe('DemandeDeStageComponent', () => {
  let component: DemandeDeStageComponent;
  let fixture: ComponentFixture<DemandeDeStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDeStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDeStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

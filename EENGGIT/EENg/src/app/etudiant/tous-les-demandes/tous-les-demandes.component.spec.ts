import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousLesDemandesComponent } from './tous-les-demandes.component';

describe('TousLesDemandesComponent', () => {
  let component: TousLesDemandesComponent;
  let fixture: ComponentFixture<TousLesDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousLesDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousLesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

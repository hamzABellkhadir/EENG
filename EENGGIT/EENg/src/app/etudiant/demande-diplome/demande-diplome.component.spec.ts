import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDiplomeComponent } from './demande-diplome.component';

describe('DemandeDiplomeComponent', () => {
  let component: DemandeDiplomeComponent;
  let fixture: ComponentFixture<DemandeDiplomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDiplomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

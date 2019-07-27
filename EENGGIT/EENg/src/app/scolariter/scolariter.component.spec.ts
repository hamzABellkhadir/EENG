import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScolariterComponent } from './scolariter.component';

describe('ScolariterComponent', () => {
  let component: ScolariterComponent;
  let fixture: ComponentFixture<ScolariterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScolariterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScolariterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

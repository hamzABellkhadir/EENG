import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccepteAttComponent } from './accepte-att.component';

describe('AccepteAttComponent', () => {
  let component: AccepteAttComponent;
  let fixture: ComponentFixture<AccepteAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccepteAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccepteAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

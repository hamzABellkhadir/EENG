import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DddAccepteComponent } from './ddd-accepte.component';

describe('DddAccepteComponent', () => {
  let component: DddAccepteComponent;
  let fixture: ComponentFixture<DddAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DddAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DddAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutDmdDddComponent } from './tout-dmd-ddd.component';

describe('ToutDmdDddComponent', () => {
  let component: ToutDmdDddComponent;
  let fixture: ComponentFixture<ToutDmdDddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToutDmdDddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutDmdDddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

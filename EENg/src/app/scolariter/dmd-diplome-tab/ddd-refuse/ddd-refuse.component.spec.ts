import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DddRefuseComponent } from './ddd-refuse.component';

describe('DddRefuseComponent', () => {
  let component: DddRefuseComponent;
  let fixture: ComponentFixture<DddRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DddRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DddRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttModuleComponent } from './att-module.component';

describe('AttModuleComponent', () => {
  let component: AttModuleComponent;
  let fixture: ComponentFixture<AttModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

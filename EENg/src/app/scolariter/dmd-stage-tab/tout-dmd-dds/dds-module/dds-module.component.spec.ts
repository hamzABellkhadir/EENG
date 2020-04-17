import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsModuleComponent } from './dds-module.component';

describe('DdsModuleComponent', () => {
  let component: DdsModuleComponent;
  let fixture: ComponentFixture<DdsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsModuleComponent } from './cds-module.component';

describe('CdsModuleComponent', () => {
  let component: CdsModuleComponent;
  let fixture: ComponentFixture<CdsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

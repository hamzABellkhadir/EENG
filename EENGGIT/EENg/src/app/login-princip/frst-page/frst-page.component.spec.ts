import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrstPageComponent } from './frst-page.component';

describe('FrstPageComponent', () => {
  let component: FrstPageComponent;
  let fixture: ComponentFixture<FrstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrstPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

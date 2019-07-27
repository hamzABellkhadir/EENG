import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttScolarTabComponent } from './att-scolar-tab.component';

describe('AttScolarTabComponent', () => {
  let component: AttScolarTabComponent;
  let fixture: ComponentFixture<AttScolarTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttScolarTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttScolarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

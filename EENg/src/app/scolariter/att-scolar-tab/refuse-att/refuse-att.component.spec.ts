import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseAttComponent } from './refuse-att.component';

describe('RefuseAttComponent', () => {
  let component: RefuseAttComponent;
  let fixture: ComponentFixture<RefuseAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefuseAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuseAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

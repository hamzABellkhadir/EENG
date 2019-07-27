import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousDmdAttComponent } from './tous-dmd-att.component';

describe('TousDmdAttComponent', () => {
  let component: TousDmdAttComponent;
  let fixture: ComponentFixture<TousDmdAttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousDmdAttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousDmdAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

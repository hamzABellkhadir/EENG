import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TousDmdCdsComponent } from './tous-dmd-cds.component';

describe('TousDmdCdsComponent', () => {
  let component: TousDmdCdsComponent;
  let fixture: ComponentFixture<TousDmdCdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TousDmdCdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TousDmdCdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

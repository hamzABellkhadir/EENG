import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutDmdRdnComponent } from './tout-dmd-rdn.component';

describe('ToutDmdRdnComponent', () => {
  let component: ToutDmdRdnComponent;
  let fixture: ComponentFixture<ToutDmdRdnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToutDmdRdnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutDmdRdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

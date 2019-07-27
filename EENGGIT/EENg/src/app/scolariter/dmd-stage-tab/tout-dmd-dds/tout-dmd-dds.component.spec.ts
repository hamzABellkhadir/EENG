import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutDmdDdsComponent } from './tout-dmd-dds.component';

describe('ToutDmdDdsComponent', () => {
  let component: ToutDmdDdsComponent;
  let fixture: ComponentFixture<ToutDmdDdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToutDmdDdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutDmdDdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

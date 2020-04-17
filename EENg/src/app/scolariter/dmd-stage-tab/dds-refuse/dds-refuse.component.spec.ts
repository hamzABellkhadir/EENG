import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsRefuseComponent } from './dds-refuse.component';

describe('DdsRefuseComponent', () => {
  let component: DdsRefuseComponent;
  let fixture: ComponentFixture<DdsRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdsRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdsRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdsAccepteComponent } from './dds-accepte.component';

describe('DdsAccepteComponent', () => {
  let component: DdsAccepteComponent;
  let fixture: ComponentFixture<DdsAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdsAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdsAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

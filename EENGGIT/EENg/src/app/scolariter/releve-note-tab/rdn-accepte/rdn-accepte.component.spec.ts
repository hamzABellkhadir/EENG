import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdnAccepteComponent } from './rdn-accepte.component';

describe('RdnAccepteComponent', () => {
  let component: RdnAccepteComponent;
  let fixture: ComponentFixture<RdnAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdnAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdnAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

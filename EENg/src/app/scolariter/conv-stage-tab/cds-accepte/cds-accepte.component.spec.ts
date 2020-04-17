import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsAccepteComponent } from './cds-accepte.component';

describe('CdsAccepteComponent', () => {
  let component: CdsAccepteComponent;
  let fixture: ComponentFixture<CdsAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdsAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdsAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

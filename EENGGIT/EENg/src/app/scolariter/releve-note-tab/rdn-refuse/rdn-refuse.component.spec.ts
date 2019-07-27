import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdnRefuseComponent } from './rdn-refuse.component';

describe('RdnRefuseComponent', () => {
  let component: RdnRefuseComponent;
  let fixture: ComponentFixture<RdnRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdnRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdnRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

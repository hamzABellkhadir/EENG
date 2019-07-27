import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsRefuseComponent } from './cds-refuse.component';

describe('CdsRefuseComponent', () => {
  let component: CdsRefuseComponent;
  let fixture: ComponentFixture<CdsRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdsRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdsRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

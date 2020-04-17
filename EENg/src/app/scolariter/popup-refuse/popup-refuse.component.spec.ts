import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRefuseComponent } from './popup-refuse.component';

describe('PopupRefuseComponent', () => {
  let component: PopupRefuseComponent;
  let fixture: ComponentFixture<PopupRefuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRefuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRefuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

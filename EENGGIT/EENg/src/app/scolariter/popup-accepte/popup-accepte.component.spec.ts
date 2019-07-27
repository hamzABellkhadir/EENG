import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAccepteComponent } from './popup-accepte.component';

describe('PopupAccepteComponent', () => {
  let component: PopupAccepteComponent;
  let fixture: ComponentFixture<PopupAccepteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAccepteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAccepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

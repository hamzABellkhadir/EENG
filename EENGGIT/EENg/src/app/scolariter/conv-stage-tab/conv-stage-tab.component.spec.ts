import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvStageTabComponent } from './conv-stage-tab.component';

describe('ConvStageTabComponent', () => {
  let component: ConvStageTabComponent;
  let fixture: ComponentFixture<ConvStageTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvStageTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvStageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

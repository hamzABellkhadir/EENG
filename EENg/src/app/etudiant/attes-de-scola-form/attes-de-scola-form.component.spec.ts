import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttesDeScolaFormComponent } from './attes-de-scola-form.component';

describe('AttesDeScolaFormComponent', () => {
  let component: AttesDeScolaFormComponent;
  let fixture: ComponentFixture<AttesDeScolaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttesDeScolaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttesDeScolaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileScolariteComponent } from './profile-scolarite.component';

describe('ProfileScolariteComponent', () => {
  let component: ProfileScolariteComponent;
  let fixture: ComponentFixture<ProfileScolariteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileScolariteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

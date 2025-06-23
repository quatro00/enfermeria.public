import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfileSettingsComponent } from './doctor-profile-settings.component';

describe('DoctorProfileSettingsComponent', () => {
  let component: DoctorProfileSettingsComponent;
  let fixture: ComponentFixture<DoctorProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorProfileSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorProfileSettingsRoutingModule } from './doctor-profile-settings-routing.module';
import { DoctorProfileSettingsComponent } from './doctor-profile-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    DoctorProfileSettingsRoutingModule,
    SharedModule
  ]
})
export class DoctorProfileSettingsModule { }

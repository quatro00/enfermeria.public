import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfileSettingsComponent } from './doctor-profile-settings.component';

const routes: Routes = [{ path: '', component: DoctorProfileSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorProfileSettingsRoutingModule { }

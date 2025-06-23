import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleTimingsRoutingModule } from './schedule-timings-routing.module';
import { ScheduleTimingsComponent } from './schedule-timings.component';


@NgModule({
  declarations: [
    ScheduleTimingsComponent
  ],
  imports: [
    CommonModule,
    ScheduleTimingsRoutingModule
  ]
})
export class ScheduleTimingsModule { }

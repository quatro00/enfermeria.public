import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatDoctorRoutingModule } from './chat-doctor-routing.module';
import { ChatDoctorComponent } from './chat-doctor.component';


@NgModule({
  declarations: [
    ChatDoctorComponent
  ],
  imports: [
    CommonModule,
    ChatDoctorRoutingModule
  ]
})
export class ChatDoctorModule { }

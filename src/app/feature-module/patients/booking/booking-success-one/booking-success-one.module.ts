import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingSuccessOneRoutingModule } from './booking-success-one-routing.module';
import { BookingSuccessOneComponent } from './booking-success-one.component';


@NgModule({
  declarations: [
    BookingSuccessOneComponent
  ],
  imports: [
    CommonModule,
    BookingSuccessOneRoutingModule
  ]
})
export class BookingSuccessOneModule { }

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { materialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PaginationHeaderModule } from './pagination-header/pagination-header.module';
import { CustomPaginationModule } from './custom-pagination/custom-pagination.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CountUpModule } from 'ngx-countup';
import { LightboxModule } from 'ngx-lightbox';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { LightgalleryModule } from 'lightgallery/angular'; 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModule,
    HttpClientModule,
    NgApexchartsModule,
    PaginationHeaderModule,
    CustomPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      showMaskTyped: false,
    }),
    
    SlickCarouselModule,
    BsDatepickerModule.forRoot(),
    NgCircleProgressModule.forRoot({
      "radius": 40,
      "space": -5,
      "outerStrokeWidth": 5,
      "innerStrokeWidth": 5,
      "animationDuration": 1000,
      "startFromZero": false,
      "lazy": false,
      "outerStrokeLinecap":"square",
      "showSubtitle": false,
      "showTitle" : false,
      "showUnits" : false,
      "showBackground" : false
    }),
    CarouselModule,
    TimepickerModule,
    CountUpModule,
    GoogleMapsModule,
    LightboxModule,
    NgxMatIntlTelInputComponent,
    LightgalleryModule,
    NgScrollbarModule,
    MatSliderModule,
    NgScrollbarModule
  ],
  exports: [
    CommonModule,
    materialModule,
    HttpClientModule,
    NgApexchartsModule,
    PaginationHeaderModule,
    CustomPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    SlickCarouselModule,
    BsDatepickerModule,
    NgCircleProgressModule,
    CarouselModule,
    TimepickerModule,
    CountUpModule,
    LightboxModule,
    NgxMatIntlTelInputComponent,
    LightgalleryModule,
    NgScrollbarModule,
    MatSliderModule,
    NgScrollbarModule
  ],
  providers: [
    DatePipe
  ],
})
export class SharedModule { }

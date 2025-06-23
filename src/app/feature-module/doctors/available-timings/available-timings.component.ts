import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-available-timings',
  templateUrl: './available-timings.component.html',
  styleUrls: ['./available-timings.component.scss']
})
export class AvailableTimingsComponent implements OnInit {
  myDateValue!: Date ;
  public routes = routes;
  date = new Date();
  ngOnInit() {
    this.myDateValue = new Date();
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}

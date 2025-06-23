import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-home5',
  templateUrl: './home5.component.html',
  styleUrls: ['./home5.component.scss']
})
export class Home5Component implements OnInit{
  public routes = routes;
  myDateValue!: Date ;
date = new Date();
public isClassAdded: boolean[] = [false];

toggleClass(index: number){
this.isClassAdded[index] = !this.isClassAdded[index]
}
constructor(private router: Router) {}
public navigation() {
  this.router.navigate([routes.search2]);
}
ngOnInit() {
  this.myDateValue = new Date();
}
onDateChange(newDate: Date) {
  console.log(newDate);
}

}

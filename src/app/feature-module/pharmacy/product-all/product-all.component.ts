import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.scss']
})
export class ProductAllComponent {
  public routes = routes;
  public isClassAdded: boolean[] = [false];
  toggleClass(index: number){
    this.isClassAdded[index] = !this.isClassAdded[index]
  }
}

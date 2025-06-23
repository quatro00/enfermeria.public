import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {
  public routes = routes;
  public isClassAdded: boolean[] = [false];
  toggleClass(index: number){
    this.isClassAdded[index] = !this.isClassAdded[index]
  }
}

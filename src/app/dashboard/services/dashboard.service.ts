import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Dashboard } from './dashboard.model';
import { Widget } from './widget.model';

@Injectable()
export class DashboardService {

  private dashboards: Dashboard[] = [

      new Dashboard(
        'dashs name',
        'this is the desc',
        [
          new Widget(1, 'the name','type', 'data'),
          new Widget(2, 'the name','type', 'data')
        ]
      ),
      new Dashboard(
        'dashs name',
        'this is the desc',
        [
          new Widget(1, 'the name','type', 'data'),
          new Widget(2, 'the name','type', 'data')
        ]
      )

  ];

  constructor() {}

  getDashboard(index: number) {
    return this.dashboards[index];
  }

  // getRecipes() {
  //   return this.recipes.slice();
  // }

  // getRecipe(index: number) {
  //   return this.recipes[index];
  // }

  // addRecipe(recipe: Recipe) {
  //   this.recipes.push(recipe);
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // updateRecipe(index: number, newRecipe: Recipe) {
  //   this.recipes[index] = newRecipe;
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // deleteRecipe(index: number) {
  //   this.recipes.splice(index, 1);
  //   this.recipesChanged.next(this.recipes.slice());
  // }
}

import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediant } from '../shared/ingrediant.model';

@Injectable()
export class RecipeService {
  
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Brownie Batter Desserts', 'Go home, cookie dough. You are drunk.', 'http://del.h-cdn.co/assets/16/03/980x490/landscape-1453255739-delish-foodstirs-takeover-brownie-ice-cream-scooped.jpg',
    [
      new Ingrediant('Milk', 1),
      new Ingrediant('Eggs', 5)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Healthy Sweet Potato', 'Sweet potato, bro.', 'http://del.h-cdn.co/assets/16/36/980x490/landscape-1473346429-delish-sweet-potato-toast-4.jpg',
    [
      new Ingrediant('potatoes', 10),
      new Ingrediant('Cheese', 2)
    ])
  ];
  constructor() { }
  getrecipe() {
    return this.recipes;
  }
  getspecificRecipe(id: number) {
    return this.recipes[id];
  }
}

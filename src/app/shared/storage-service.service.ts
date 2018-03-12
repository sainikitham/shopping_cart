import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http } from '@angular/http';

@Injectable()
export class StorageServiceService {

  constructor(private _RecipeService: RecipeService, private _http: Http) {

  }
  onsavedata() {
    return this._http.put('https://recipe-book-3702c.firebaseio.com/recipes.json', this._RecipeService.getrecipe());
  }
  onfetchdata() {
    return this._http.
      get('https://recipe-book-3702c.firebaseio.com/recipes.json').subscribe(
      (data) => {
        const recipes = data.json();
        this._RecipeService.setrecipes(recipes);
      }
      );
  }
}

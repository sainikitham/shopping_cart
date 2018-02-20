import { Injectable } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Injectable()
export class ShoppingListService {
  ingrediants: Ingrediant[] = [
    new Ingrediant('tomato', 10),
    new Ingrediant('apples', 6),
  ];
  constructor() { }
  getIngrediant() {
    return this.ingrediants;
  }
  addIngrediant(ingrediant: Ingrediant) {
    this.ingrediants.push(ingrediant);
  }
  addArrayIngrediant(ingrediant: Ingrediant[]) {
    this.ingrediants.push(...ingrediant);
  }
}

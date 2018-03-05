import { Injectable } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
  ingrediants: Ingrediant[] = [
    new Ingrediant('tomato', 10),
    new Ingrediant('apples', 6),
  ];
  startededitting = new Subject();
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
  getEditIngrediant(index: number) {
    return this.ingrediants[index];
  }
  updateIngrediant(i, newing) {
    this.ingrediants[i] = newing;

  }
}

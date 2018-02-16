import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediant: Ingrediant[] = [
    new Ingrediant('tomato', 10)
  ];
   constructor() { }

  ngOnInit() {
  }

}

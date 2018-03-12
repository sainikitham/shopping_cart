import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private _ShoppingListService: ShoppingListService,
    private _RecipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.recipe = this._RecipeService.getspecificRecipe(this.id);
   });
  }
  ondelete() {
     this._RecipeService.deleterecipe(this.id);
     this.router.navigate(['../'], {relativeTo: this.route});
    }
  toshpnglist() {
    this._ShoppingListService.addArrayIngrediant(this.recipe.ingrediants);
  }
  onEditrecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}

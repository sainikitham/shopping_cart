import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private _RecipeService: RecipeService,
          private _Router: Router,
        private _route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this._RecipeService.getrecipe();
  }
//   onnewrecipe() {
//    this._Router.navigate(['new'], {relativeTo: this._route});
//  }
}

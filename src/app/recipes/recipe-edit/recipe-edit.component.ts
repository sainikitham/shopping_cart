import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingrediant } from '../../shared/ingrediant.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editmode = false;
  heroForm: FormGroup;
  editIngre = [];
  constructor(private route: ActivatedRoute, private _RecipeService: RecipeService, private _router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      this.initform();
   });
  }
  onsubmit() {
    if (this.editmode) {
      this._RecipeService.updaterecipe(this.id, this.heroForm.value);
    } else {
      this._RecipeService.addrecipe(this.heroForm.value);
    }
    this.oncancel();
  }
  oncancel() {
    this._router.navigate(['../'], {relativeTo: this.route});
   }
   delingre(id: number) {
    (<FormArray>this.heroForm.get('ingrediants')).removeAt(id);
   }
  private initform() {
    let recipename: String;
    let recipeimagePath: String;
    let recipedescription: String;
    let recipeingrediants = new FormArray([]);
    if (this.editmode) {
      const editrecipe = this._RecipeService.getspecificRecipe(this.id);
      console.log(editrecipe);
      recipename = editrecipe.name;
      recipeimagePath = editrecipe.imagePath;
      recipedescription = editrecipe.description;
      if (editrecipe.ingrediants) {
        for (const ingrediant of editrecipe.ingrediants) {
          recipeingrediants.push(
            new FormGroup({
              'name': new FormControl(ingrediant.name, Validators.required),
              'amount': new FormControl(ingrediant.amount, [, Validators.required, , Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.heroForm = new FormGroup ({
      'name': new FormControl(recipename, Validators.required),
      'imagePath': new FormControl(recipeimagePath, Validators.required),
      'description' : new FormControl(recipedescription, Validators.required),
      'ingrediants': recipeingrediants

    });
  }
  onadding() {
    (<FormArray>this.heroForm.get('ingrediants')).push(
         new FormGroup(
           {
            'name': new FormControl(),
            'amount': new FormControl()
           }
         )
    );
  }

}

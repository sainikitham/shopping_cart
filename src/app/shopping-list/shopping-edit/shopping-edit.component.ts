import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingrediant } from '../../shared/ingrediant.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name;
  amount: number;
  index: number;
  
  editmode = false;
  edittedingre: Ingrediant;
  @Input() formname: string;
  @Output() formamount: string;
  @Output() selectedIngred = new EventEmitter<Ingrediant>();
  constructor(private _ShoppingListService: ShoppingListService) { }

  ngOnInit() {
    this._ShoppingListService.startededitting.subscribe(
      (i: number) => {
        this.editmode = true;
        this.index = i;
        this.edittedingre = this._ShoppingListService.getEditIngrediant(this.index);
        this.name = this.edittedingre.name;
        this.amount = this.edittedingre.amount;
      }
    );
  }
  onadditem(form) {
    const newingrediant = new Ingrediant(this.name, this.amount);
    if (this.editmode) {
      this._ShoppingListService.updateIngrediant(this.index, newingrediant);
    } else {
      this._ShoppingListService.addIngrediant(newingrediant);
    }
    this.editmode = false;
    form.reset();
    }
    onclear(heroForm) {
     heroForm.reset();
     this.editmode = false;
    }
}

import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingrediant } from '../../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput') nameinputRef: ElementRef;
  @ViewChild('amountinput') amountinputRef: ElementRef;
  @Output() selectedIngred = new EventEmitter<Ingrediant>();
  constructor() { }

  ngOnInit() {
  }
  oningrediant(e) {
    const nameinput = this.nameinputRef.nativeElement.value;
    const amountinput = this.amountinputRef.nativeElement.value;
    const newingrediant = new Ingrediant(nameinput, amountinput);
    this.selectedIngred.emit(newingrediant);
    e.preventDefault();
    }
}

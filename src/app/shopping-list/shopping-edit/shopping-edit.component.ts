import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import {Ingredient} from "../../shared/ingredient.model"

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput',{static:true}) nameInputRef: ElementRef; 
 @ViewChild('amountInput',{static:true}) amountInputRef: ElementRef;

 @Output() ingredientAdded = new EventEmitter<Ingredient>();
 

  constructor() { }

  ngOnInit() {

  }
    onAddItem(ingredient:Ingredient){
      const name = this.nameInputRef.nativeElement.value;
      const amount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(name,amount);
      this.ingredientAdded.emit(newIngredient);
    }

}

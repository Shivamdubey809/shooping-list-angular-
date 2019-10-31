import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Recipie} from "../recipies.model";
import { RecipieService } from '../recipies.services';



@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css'] 
})
export class RecipiesListComponent implements OnInit {
  @Output() recipieWasSelected = new EventEmitter<Recipie>();
  recipies: Recipie[]; 

  constructor(private recipieService: RecipieService) { }

  ngOnInit() {
    this.recipies = this.recipieService.getRecipies();
  }
  onRecipieSelected(recipie:Recipie){
      this.recipieWasSelected.emit(recipie); 
  }
}

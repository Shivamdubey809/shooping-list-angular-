import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Recipie} from "../../recipies.model";

@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
 @Output() recipieSelected = new EventEmitter<void>();
 @Input() recipie : Recipie
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipieSelected.emit();
  }

}

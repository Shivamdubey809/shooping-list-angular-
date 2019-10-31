import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipies.model';
import { RecipieService } from './recipies.services';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipieService],
})
export class RecipiesComponent implements OnInit {
  selectedRecipie : Recipie;

  constructor() {}

  ngOnInit() {
  }

}

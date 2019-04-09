import { Component, OnInit } from '@angular/core';

import { Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[] =[
new Ingredient('Chicken Chap',5),
new Ingredient('Chicken Kadai',10),
];

  constructor() { }

  ngOnInit() {
  }

}

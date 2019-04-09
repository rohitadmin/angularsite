import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css']
})
export class RecipeListsComponent implements OnInit {
  recipes: Recipe[] = [
   new Recipe('Chicken Birayani', 'Best Chicken to in the Birayani industry, just smell and eat it.', 'https://banner2.kisspng.com/20180330/vkq/kisspng-fizzy-drinks-hyderabadi-biryani-chicken-65-biryani-5abedc78a680a8.782596021522457720682.jpg'),
   new Recipe('Chicken Birayani', 'Best Chicken to in the Birayani industry, just smell and eat it.', 'https://banner2.kisspng.com/20180330/vkq/kisspng-fizzy-drinks-hyderabadi-biryani-chicken-65-biryani-5abedc78a680a8.782596021522457720682.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

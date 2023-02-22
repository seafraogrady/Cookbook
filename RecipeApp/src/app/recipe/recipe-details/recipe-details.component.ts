import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe!: Recipe;
  starRating=0;
 
  constructor() { }

  ngOnInit(): void {
  
  }

}

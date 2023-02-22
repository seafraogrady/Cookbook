import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/internal/operators/map';
import { Recipe } from 'src/app/recipe';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  recipeName= '';
  recipes: Recipe[] = [];
  recipeList: Recipe[] = [];
  message: string = "";

  user$ = this.auth.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null)));

  constructor(public auth: AuthService,private recipeService: RecipeService) { }

  ngOnInit(): void {
    

    this.recipeService.getRecipes().subscribe({
      next: (value: Recipe[])=> this.recipeList = value,
      complete: () => console.log('recipe service finished'),
      error: (mess) => this.message = mess

    })
  }

}

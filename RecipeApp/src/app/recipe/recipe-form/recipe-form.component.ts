import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { RecipeService } from 'src/app/recipe.service';
import { Recipe } from 'src/app/recipe';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  @Output() recipeFormClose = new EventEmitter<Recipe>();
  @Input() recipe?: Recipe;
  recipeForm: FormGroup = new FormGroup({});

 



  constructor() { }

  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      recipeName: new FormControl ('', [Validators.required]),
      serves: new FormControl (''),
      ingredients: new FormGroup({
        ingredientList: new FormControl('', [Validators.required]),
        nutrition: new FormControl(''),
      }),
      method: new FormGroup({
  stepOne: new FormControl('', [Validators.required]),
  stepTwo: new FormControl(''),
  stepThree: new FormControl(''),
      }),
      cookTime:new FormControl(''),
        prepTime:new FormControl(''),
        image:new FormGroup({
url:new  FormControl(''),
        }),
        mealType: new FormControl('', [Validators.required]),
       
    })
  }
  onSubmit(){
    console.log('forms submitted with ');
    console.table(this.recipeForm.value);
    this.recipeFormClose.emit(this.recipeForm?.value);

  }

  closeForm() {
    this.recipeFormClose.emit(undefined)
  }

  get recipeName() {
    return this.recipeForm?.get('recipeName');
  }
  get mealType() {
    return this.recipeForm?.get('mealType');
  }
  get serves() {
    return this.recipeForm?.get('serves');
  }

  get stepOne() {
    return this.recipeForm?.get('stepOne');
  }
  get ingredientList() {
    return this.recipeForm?.get('ingredientList');
  }

 
}

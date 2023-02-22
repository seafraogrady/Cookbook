import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';

import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { ProfileComponent } from './recipe/profile/profile.component';
import { HomeComponent } from './recipe/home/home.component';
import { AuthGuard } from '@auth0/auth0-angular';
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'recipes',component: RecipeListComponent,canActivate:[AuthGuard]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './recipe/recipe-form/recipe-form.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeRowComponent } from './recipe/recipe-row/recipe-row.component';
import { RecipeHeaderComponent } from './recipe/recipe-header/recipe-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthHttpInterceptor, AuthModule} from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { ProfileComponent } from './recipe/profile/profile.component';
import { HomeComponent } from './recipe/home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CommunityComponent } from './community/community.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecipesModule } from './recipe/recipes.module';
import { RecipesRoutingModule } from './recipe/recipes-routing.module';
import { Routes } from '@angular/router';
const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'community', component:CommunityComponent},
  {path: 'recipes',component: RecipeDetailsComponent},
  {path: 'recipes/:id',component: RecipeDetailsComponent},
  {path: 'profile', component: ProfileComponent},


 
];


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeFormComponent,
    RecipeListComponent,
    RecipeRowComponent,
    RecipeHeaderComponent,
    ProfileComponent,
    HomeComponent,
    CommunityComponent,
    LoginComponent,
    RegisterComponent
  ],
  
  imports: [
    BrowserModule,
 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
RecipesRoutingModule,
    NgImageSliderModule,
    RouterModule.forRoot(routes),
    
    NgbModule,
    AuthModule.forRoot({...environment.auth0,
      httpInterceptor: {
        allowedList: [`${environment.apiUri}/recipe`],
      },}),
    RecipesModule,
    AppRoutingModule,

  ],
  providers: [ { 
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }

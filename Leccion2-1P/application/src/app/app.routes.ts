import { Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipe/:nombre', component: RecipeDetailComponent },
  { path: '**', redirectTo: '' }
];

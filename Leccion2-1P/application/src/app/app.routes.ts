import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { RecipeList} from './components/recipe-list/recipe-list';
import { Carousel } from './components/carousel/carousel';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'recetas', component: RecipeList },
  { path: 'galeria', component: Carousel},
  { path: '**', redirectTo: '' }
];
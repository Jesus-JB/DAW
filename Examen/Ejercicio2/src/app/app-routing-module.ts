import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { GalleryComponent } from './components/gallery/gallery';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '' }
];

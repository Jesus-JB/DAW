import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'platos',
    loadComponent: () =>
      import('./components/platos/platos.component').then(m => m.PlatosComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

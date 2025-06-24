import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'nav',
    loadComponent: () =>
import('./components/nav/nav.component').then(m => m.NavComponent)
  },
  {
    path: '',
    redirectTo: 'nav',
    pathMatch: 'full'
  }
];

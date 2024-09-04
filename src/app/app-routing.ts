import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './core/guards';
import { ProductsComponent } from './products/products.component'; // Importar explícitamente si es necesario

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/home/home.component')
  },
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      {
        path: 'sign-up',
        loadComponent: () => import('./pages/auth/sign-up/sign-up.component')
      },
      {
        path: 'log-in',
        loadComponent: () => import('./pages/auth/log-in/log-in.component')
      },
    ],
  },
  {
    path: 'products',
    canActivate: [authGuard],
    loadComponent: () => import('.//products/products.component').then(m => m.ProductsComponent),
  },
];

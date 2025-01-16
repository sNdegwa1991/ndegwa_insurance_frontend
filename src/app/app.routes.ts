import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./modules/auth/login/login.component')
          .then(m => m.LoginComponent)
      },
      
      {
        path: 'register',
        loadComponent: () => import('./modules/auth/register/register.component')
          .then(m => m.RegisterComponent)
      },
      {
        path: 'policies',
        loadChildren: () => import('./modules/policy.routes')
          .then(m => m.POLICIES_ROUTES),
          canActivate: [authGuard]
      },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: '**', redirectTo: '/login' }
];

import { Routes } from "@angular/router";
import { HomeComponent } from "./dashboard/home/home.component";
import { authGuard } from "../guards/auth.guard";

export const POLICIES_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'policies',
                loadComponent: () => import('./dashboard/policy-list/policy-list.component').then(m => m.PolicyListComponent),
                canActivate: [authGuard],
              },
              {
                path: '',
                redirectTo: 'policies',
                pathMatch: 'full'
              },
        ]
    }
];
import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { StoreComponent } from './+Tutorial/+store/store.component';
import { AuthComponent } from './auth/auth.component';

export const remoteRoutes: Route[] = [
    
     { path: '', component:RemoteEntry ,

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./auth/auth.component').then(m => m.AuthComponent)
      },
    ]

     },
      
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/auth.component').then(m => m.AuthComponent)
      },
    { path: 'store', component: StoreComponent },
      { path: '', redirectTo: 'auth', pathMatch: 'full' }

    
]
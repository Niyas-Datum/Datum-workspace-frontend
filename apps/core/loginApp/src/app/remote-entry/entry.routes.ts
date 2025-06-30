import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { StoreComponent } from './+Tutorial/+store/store.component';

export const remoteRoutes: Route[] = [
    
     { path: '', component:RemoteEntry ,

        children: [
                {
                    path: '',
                    loadComponent: () =>
                    import('./authlogin/authlogin.component').then(m => m.AuthloginComponent)
                },
        ]

     },
      
    //   {
    //     path: 'login',
    //     loadComponent: () =>
    //       import('./auth/auth.component').then(m => m.AuthloginComponent)
    //   },
    { path: 'store', component: StoreComponent },
      { path: '', redirectTo: 'auth', pathMatch: 'full' }

    
]
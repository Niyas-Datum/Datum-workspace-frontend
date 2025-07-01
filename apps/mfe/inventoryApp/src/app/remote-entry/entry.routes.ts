import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [{ path: '', component: RemoteEntry,

    children:[

                {
                    path: 'sales',
                    loadChildren: () => import('./sales/sales-module').then((m) => m!.SalesModule),
                }
            
            ]
 }];

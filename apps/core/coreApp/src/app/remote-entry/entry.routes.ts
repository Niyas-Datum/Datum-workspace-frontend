import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [{ path: '', component: RemoteEntry 
            ,
            children: [
                  {
              path: 'inv',
              loadChildren: () =>
                import('inventoryApp/Module').then((m) => m!.RemoteEntryModule),
            },
          
            {
              path: 'general',
              loadChildren: () =>
              import('generalApp/Module').then((m) => m!.RemoteEntryModule),
            },
            {
              path: 'finance',
              loadChildren: () =>
                import('financialApp/Module').then((m) => m!.RemoteEntryModule),
            },
          ]
          },
  //    {
  //   path: 'inventoryApp',
  //   loadChildren: () =>
  //     import('inventoryApp/Module').then((m) => m!.RemoteEntryModule),
  // },
  {
    path: 'generalApp',
    loadChildren: () =>
      import('generalApp/Module').then((m) => m!.RemoteEntryModule),
  },
   {
    path: 'financialApp',
    loadChildren: () =>
      import('financialApp/Module').then((m) => m!.RemoteEntryModule),
  },
];

import { Route } from '@angular/router';
import { RemoteEntry } from './entry';

export const remoteRoutes: Route[] = [{ path: '', component: RemoteEntry },
     {
    path: 'inventoryApp',
    loadChildren: () =>
      import('inventoryApp/Module').then((m) => m!.RemoteEntryModule),
  },
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

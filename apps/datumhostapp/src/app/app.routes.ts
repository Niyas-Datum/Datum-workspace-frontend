import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('coreApp/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('loginApp/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcome,
  },
];

import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'coreApp',
    loadChildren: () =>
      import('coreApp/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: 'loginApp',
    loadChildren: () =>
      import('loginApp/Module').then((m) => m!.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcome,
  },
];

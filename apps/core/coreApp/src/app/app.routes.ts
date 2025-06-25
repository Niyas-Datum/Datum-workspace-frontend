import { NxWelcome } from './nx-welcome';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcome,
  },
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry-module').then((m) => m.RemoteEntryModule),
  },
];

import { Route } from '@angular/router';
import { RemoteEntry } from './entry';
import { AuthComponent } from './+Tutorial/+store/Auth.component';

export const remoteRoutes: Route[] = [{ path: '', component: AuthComponent }];

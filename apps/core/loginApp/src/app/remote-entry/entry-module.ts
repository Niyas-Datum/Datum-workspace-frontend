import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntry } from './entry';
import { NxWelcome } from './nx-welcome';
import { remoteRoutes } from './entry.routes';
import { AuthComponent } from './+Tutorial/+store/Auth.component';

@NgModule({
  declarations: [RemoteEntry, NxWelcome, AuthComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}

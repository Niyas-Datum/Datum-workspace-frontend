import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntry } from './entry';
import { NxWelcome } from './nx-welcome';
import { remoteRoutes } from './entry.routes';
import { AppHeaderComponent,MainMenuComponent} from '@datum/ui'; // Adjust the import path as necessary
@NgModule({
  declarations: [RemoteEntry, NxWelcome],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes),AppHeaderComponent, MainMenuComponent],
  providers: [],
})
export class RemoteEntryModule {}

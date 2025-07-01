import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TabTrackerService } from '@datum/utils';

@Component({
  imports: [NxWelcome, RouterModule,
    
  
  ],
  providers: [TabTrackerService],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {

 // private tabTracker = Inject(TabTrackerService);
  protected title = 'datumhostapp';
  constructor(  private tabTracker: TabTrackerService
) { 
    this.tabTracker.initTracker();}
}

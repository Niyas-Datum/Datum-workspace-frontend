import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@datum/ui';

@Component({
  selector: 'app-loginApp-entry',
  standalone: true,
  imports: [RouterModule, HeaderComponent],

  template: `
  <app-base-header></app-base-header>
  
  <h1>Remote Entry Layout</h1>
    <nav>
      <a routerLink="">Home</a> |
      <a routerLink="profile">Profile</a> |
      <a routerLink="settings">Settings</a>
    </nav>
    <router-outlet></router-outlet>`,
})
export class RemoteEntry {

  protected title = 'loginApp -tes';
}

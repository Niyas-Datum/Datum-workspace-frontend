import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@datum/ui';

@Component({
  selector: 'app-loginApp-entry',
  standalone: true,
  imports: [RouterModule, HeaderComponent],

  template: `
  <app-base-header></app-base-header>
  <main class="content">
    <router-outlet></router-outlet> </main>`,
  
})
export class RemoteEntry {

  protected title = 'loginApp -tes';
}

import { Component } from '@angular/core';
import { AppHeaderComponent } from '@datum/ui';


@Component({
  selector: 'app-coreApp-entry',
  standalone: false,
  template: `
  <app-header></app-header>
  <main class="content">
    <router-outlet></router-outlet> 
    </main>
  <ul class="remote-menu">
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="inv">InventoryApp</a></li>
  <li><a routerLink="general">GeneralApp</a></li>
  <li><a routerLink="finance">FinancialApp</a></li>
</ul>

`,
})
export class RemoteEntry {}

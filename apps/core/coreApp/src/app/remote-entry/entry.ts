import { Component } from '@angular/core';

@Component({
  selector: 'app-coreApp-entry',
  standalone: false,
  template: `<ul class="remote-menu">
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="inventoryApp">InventoryApp</a></li>
  <li><a routerLink="generalApp">GeneralApp</a></li>
  <li><a routerLink="financialApp">FinancialApp</a></li>
</ul><app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntry {}

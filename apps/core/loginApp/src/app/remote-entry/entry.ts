import { Component } from '@angular/core';

@Component({
  selector: 'app-loginApp-entry',
  standalone: false,
  template: `{{title}} dd<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntry {

  protected title = 'loginApp -tes';
}

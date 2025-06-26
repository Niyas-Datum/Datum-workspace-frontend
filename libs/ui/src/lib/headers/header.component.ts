import { Component } from '@angular/core';

@Component({
  selector: 'app-base-header',
  standalone: true,
  template: `
    <header style="padding: 1rem; background-color: #f0f0f0; border-bottom: 1px solid #ccc;">
      <h1>dd Header</h1>
    </header>
  `
})
export class HeaderComponent {}
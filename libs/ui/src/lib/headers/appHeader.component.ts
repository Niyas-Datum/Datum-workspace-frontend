import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="logo">🧩 MyApp</div>
      <nav class="nav">
        <a href="/" class="nav-link">Home</a>
        <a href="/about" class="nav-link">About</a>
        <a href="/items" class="nav-link">Items</a>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #1e1e2f;
      color: white;
    }
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .nav-link {
      margin-left: 1rem;
      color: white;
      text-decoration: none;
    }
    .nav-link:hover {
      text-decoration: underline;
    }
  `]
})
export class AppHeaderComponent {}
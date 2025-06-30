import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-quick-menu',
  template: `
  <aside class="sidebar">
  <nav class="navbar navbar-expand-lg  ">
    <a class="navbar-brand" href="#">
      <div class="sf-icon me-2">SF</div>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" href="#">Sales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Marketing</a>
        </li>
      </ul>
    </div>
  </nav>
</aside>
`,
styles: [``]})
export class QuickMenuComponent {
  // This component is currently empty, but you can add functionality or properties as needed.
  // For example, you might want to add methods to handle quick menu actions or properties to manage its state.
}
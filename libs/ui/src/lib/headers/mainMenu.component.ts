import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-menu',
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

        <!-- Dropdown -->
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Reports</a></li>
            <li><a class="dropdown-item" href="#">Dashboards</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
          </ul>
        </li>
      </ul>

      <div class="d-flex align-items-center">
        <a href="#" class="btn btn-outline-light btn-sm me-2">Help</a>
        <a href="#" class="btn btn-light btn-sm">User</a>
      </div>
    </div>
  </nav>
  </aside>`,
styles: [`
.sidebar {}
.navbar {
  background-color: #5cbdb9 ;
  padding: 0.1rem  0.1rem;
}`]})
export class MainMenuComponent {
  protected title = 'mainMenu';
  protected menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Inventory', link: '/inventoryApp' },
    { label: 'General', link: '/generalApp' },
    { label: 'Financial', link: '/financialApp' }
  ];
}
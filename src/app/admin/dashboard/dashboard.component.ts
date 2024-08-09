import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h1>Admin Dashboard</h1>
    <nav>
      <a routerLink="/admin/users">User Management</a>
      <a routerLink="/admin/content">Content Management</a>
    </nav>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}

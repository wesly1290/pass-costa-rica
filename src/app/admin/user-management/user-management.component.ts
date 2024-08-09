import { Component } from '@angular/core';

@Component({
  selector: 'app-user-management',
  template: `
    <h2>User Management</h2>
    <button (click)="createUser()">Create User</button>
    <ul>
      <li *ngFor="let user of users">
        {{ user.name }} <button (click)="editUser(user)">Edit</button> <button (click)="deleteUser(user)">Delete</button>
      </li>
    </ul>
  `,
})
export class UserManagementComponent {
  users = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Alice Johnson' }
  ];

  createUser() {
    alert('Create user form goes here');
  }

  editUser(user: any) {
    alert(`Edit user: ${user.name}`);
  }

  deleteUser(user: any) {
    this.users = this.users.filter(u => u !== user);
  }
}

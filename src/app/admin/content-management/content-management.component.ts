import { Component } from '@angular/core';

@Component({
  selector: 'app-content-management',
  template: `
    <h2>Content Management</h2>
    <button (click)="createContent()">Create Content</button>
    <ul>
      <li *ngFor="let content of contents">
        {{ content.title }} <button (click)="editContent(content)">Edit</button> <button (click)="deleteContent(content)">Delete</button>
      </li>
    </ul>
  `,
})
export class ContentManagementComponent {
  contents = [
    { title: 'Welcome Post' },
    { title: 'About Us' },
    { title: 'Contact Information' }
  ];

  createContent() {
    alert('Create content form goes here');
  }

  editContent(content: any) {
    alert(`Edit content: ${content.title}`);
  }

  deleteContent(content: any) {
    this.contents = this.contents.filter(c => c !== content);
  }
}

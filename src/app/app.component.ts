// src/app/app.component.ts
import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TaskListComponent]
})
export class AppComponent {
  title = 'task-tracker-app';
}

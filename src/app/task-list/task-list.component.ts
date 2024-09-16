
// src/app/task-list/task-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  imports: [CommonModule, ReactiveFormsModule, TaskItemComponent],
})
export class TaskListComponent {
  tasks: { name: string; priority: string }[] = [];

  // Define the form
  taskForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    priority: new FormControl('Low', Validators.required)
  });

  addTask() {
    if (this.taskForm.valid) {
      // Extract values with null check
      const taskName = this.taskForm.get('name')?.value ?? '';
      const taskPriority = this.taskForm.get('priority')?.value ?? 'Low';

      // Push the task to the list
      this.tasks.push({ name: taskName, priority: taskPriority });

      // Reset the form with default priority value
      this.taskForm.reset({ priority: 'Low' });
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}

// src/app/task-item/task-item.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  imports: [HighlightDirective]
})
export class TaskItemComponent {
  @Input() task: { name: string; priority: string } = { name: '', priority: 'Low' };
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}

import { Component, input, Input, output } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}

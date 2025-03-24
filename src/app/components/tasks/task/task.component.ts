import { Component, input } from '@angular/core';
import { ITask } from '../../../models/task';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<ITask>();

  constructor(private tasksService: TasksService) { }

  onCompleteTask() {
    this.tasksService.completeTask(this.task().id);
  }
}

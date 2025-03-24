import { Component, input, Input, output } from '@angular/core';
import { ITask } from '../../../models/task';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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

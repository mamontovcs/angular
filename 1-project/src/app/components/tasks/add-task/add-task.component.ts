import { Component, input, output, signal } from '@angular/core';
import { ITask } from '../../../models/task';
import { Task } from '../../../models/task-model';

@Component({
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  onCancel = output();
  onAdd = output<ITask>();

  userId = '';

  title = signal('');
  summary = signal('');
  date = signal(new Date())

  onAddTask() {
    const newTask = new Task(Math.random().toString(), this.userId, this.title(), this.summary(), this.date().toString());
    this.onAdd.emit(newTask);
  }

  onCancelAddTask() {
    this.onCancel.emit();
  }
}

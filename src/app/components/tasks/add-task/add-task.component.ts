import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITask } from '../../../models/task';
import { Task } from '../../../models/task-model';
import { M } from '@angular/cdk/keycodes';

@Component({
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  onCancel = output();
  onAdd = output<ITask>();

  title = signal('');
  summary = signal('');
  date = signal(new Date())

  constructor() { }

  onAddTask() {
    const newTask = new Task(Math.random().toString(), 'u1', this.title(), this.summary(), this.date().toString());
    this.onAdd.emit(newTask);
  }

  onCancelAddTask() {
    this.onCancel.emit();
  }
}

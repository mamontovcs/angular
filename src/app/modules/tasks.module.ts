import { NgModule } from '@angular/core';
import { TasksComponent } from '../components/tasks/tasks.component';
import { TaskComponent } from '../components/tasks/task/task.component';
import { AddTaskComponent } from '../components/tasks/add-task/add-task.component';
import { SharedModule } from './shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
    [
      TasksComponent,
      TaskComponent,
      AddTaskComponent
    ],
  imports: [SharedModule, CommonModule, FormsModule],
  exports: [TasksComponent]
})
export class TasksModule { }

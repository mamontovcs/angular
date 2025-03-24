import { Component, computed, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { TaskComponent } from "./task/task.component";
import { ITask } from '../../models/task';
import { DUMMY_TASKS } from '../../dummy-tasks';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  subscription: Subscription | undefined;
  user: User | undefined;
  addTaskDialog: MatDialogRef<AddTaskComponent> | undefined;

  constructor(private userService: UserService, private dialog: MatDialog, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.subscription = this.userService.userSelected$.subscribe((selectedUser) => {
      this.user = selectedUser;
    });
  }

  getSelectedUserTasks() {
    return this.tasksService.getUsersTasks(this.user?.id || '');
  }

  onAddTask() {
    this.addTaskDialog = this.dialog.open(AddTaskComponent, { width: '500px', height: '500px' });
    this.addTaskDialog.componentInstance.userId = this.user?.id || '';
    this.addTaskDialog.componentInstance.onCancel.subscribe(() => {
      this.onCancelAddTask();
    });
    this.addTaskDialog.componentInstance.onAdd.subscribe((newTask: ITask) => {
      this.tasksService.addTask(newTask);
      this.addTaskDialog?.close();
    });
  }

  onCancelAddTask() {
    this.addTaskDialog?.close();
  }
}

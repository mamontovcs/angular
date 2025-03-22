import { Component, computed, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { TaskComponent } from "./task/task.component";
import { ITask } from '../../models/task';
import { DUMMY_TASKS } from '../../dummy-tasks';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  subscription: Subscription | undefined;
  user: User | undefined;
  tasks: ITask[] = DUMMY_TASKS;
  addTaskDialog: MatDialogRef<AddTaskComponent> | undefined;

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.userService.userSelected$.subscribe((selectedUser) => {
      this.user = selectedUser;
    });
  }

  getSelectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onAddTask() {
    this.addTaskDialog = this.dialog.open(AddTaskComponent, { width: '500px', height: '500px' });
    this.addTaskDialog.componentInstance.onCancel.subscribe(() => {
      this.onCancelAddTask();
    });
    this.addTaskDialog.componentInstance.onAdd.subscribe((newTask: ITask) => {
      this.tasks.push(newTask);
      this.addTaskDialog?.close();
    });
  }

  onCancelAddTask() {
    this.addTaskDialog?.close();
  }
}

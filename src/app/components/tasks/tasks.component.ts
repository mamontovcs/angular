import { Component, computed, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { TaskComponent } from "./task/task.component";
import { Task } from '../../models/task';
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
  tasks: Task[] = DUMMY_TASKS;

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

  onAddTask(){
    this.dialog.open(AddTaskComponent, {
      width: '250px',
    });
  }
}

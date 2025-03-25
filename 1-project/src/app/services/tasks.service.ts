import { Injectable } from '@angular/core';
import { ITask } from '../models/task';
import { DUMMY_TASKS } from '../dummy-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: ITask[] = DUMMY_TASKS;

  constructor() { 
    
  }


  getUsersTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  addTask(newTask: ITask) {
    this.tasks.push(newTask);
  }
}

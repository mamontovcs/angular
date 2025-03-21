import { Component } from '@angular/core';
import { UsersComponent } from "./components/users/users.component";
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
}
import { Component, EventEmitter, Output, output } from '@angular/core';
import { UserComponent } from "../user/user.component";
import { DUMMY_USERS } from '../../dummy-users';
import { NgFor } from '@angular/common';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  imports: [UserComponent, NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = DUMMY_USERS;
  selectedUserId!: string;
  constructor(private userService: UserService) { }

  onSelectUser(user: User) {
    this.userService.selectUser(user);
    this.selectedUserId = user.id;
  }
}

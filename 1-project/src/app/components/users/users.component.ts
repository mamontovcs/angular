import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: false,
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

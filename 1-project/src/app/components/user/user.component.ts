import { Component, computed, input, output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  user = input.required<User>();
  isSelected = input.required<boolean>();
  selectedUser = output<User>();

  onSelectUser() {
    this.selectedUser.emit(this.user());
  }
}


import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable(
  { providedIn: 'root' }
)
export class UserService {
  private selectedUser = new Subject<User>();
  public readonly userSelected$ = this.selectedUser.asObservable();

  private myRandonNumber = Math.random();

  selectUser(user: User) {
    this.selectedUser.next(user);
  }
}


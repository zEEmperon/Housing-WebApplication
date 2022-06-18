import { Injectable } from '@angular/core';
import {User} from "../../core/user/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUser(user: User) {
    let users: User[] = [];
    if(localStorage.getItem('Users')){
      users = JSON.parse(String(localStorage.getItem('Users')));
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
}

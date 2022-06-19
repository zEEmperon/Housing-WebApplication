import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  authUser(user: any){
    let users: any[] = [];
    if (localStorage.getItem('Users')){
      users = JSON.parse(String(localStorage.getItem('Users')));
    }
    return users.find(p => p.username === user.username
      && p.password === user.password);
  }
}

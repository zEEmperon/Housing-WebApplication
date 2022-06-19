import { Component } from '@angular/core';
import {AlertifyService} from "./services/alertify/alertify.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  constructor(
    private alertService: AlertifyService
  ) {}

  isLoggedIn(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.alertService.success("You are logged out");
  }

}

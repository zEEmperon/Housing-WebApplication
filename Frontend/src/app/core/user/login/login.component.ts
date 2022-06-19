import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import {AuthenticateService} from "../../../services/authenticate/authenticate.service";
import {AlertifyService} from "../../../services/alertify/alertify.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticateService,
    private alertService: AlertifyService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  onSubmit(form: NgForm){
    const token = this.authService.authUser(form.value);
    if(token){
      this.alertService.success("Successful");
      localStorage.setItem('token', token.username);
      this.router.navigate(['/']);
    } else {
      this.alertService.error("Wrong credentials");
    }
    form.reset();
  }

}

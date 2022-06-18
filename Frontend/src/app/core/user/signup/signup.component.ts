import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {UserService} from "../../../services/user/user.service";
import {User} from "../user";
import {AlertifyService} from "../../../services/alertify/alertify.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup;
  user: User;
  userSubmitted: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertifyService
  ) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm(){

    let controls = {
      userName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword:[null, [Validators.required]],
      phone: [null, [Validators.required, Validators.maxLength(10)]]
    };

    let validators: ValidatorFn[] = [
      this.passwordMatchingValidator
    ];

    this.registrationForm = this.fb.group({
      ...controls
    }, {validators});
  }

  passwordMatchingValidator(control: AbstractControl): null | ValidationErrors{
    return (control.get('password')?.value === control.get('confirmPassword')?.value)
      ? []
      : {
        notMatched: true
      };
  }

  onSubmit(){
    this.userSubmitted = true;
    if(this.registrationForm.valid){
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      this.alertService.success("Success");
    } else {
      this.alertService.error("Error: some values are invalid")
    }
  }

  userData(): User {
    return this.user = {
      name: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value
    }
  }

  //Getters for form controls
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get phone() {
    return this.registrationForm.get('phone') as FormControl;
  }
}

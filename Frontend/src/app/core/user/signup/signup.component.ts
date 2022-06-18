import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm: FormGroup;

  constructor() { }

  ngOnInit(): void {

    let controls = {
      userName: new FormControl( null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }

    let validators: ValidatorFn[] = [
      this.passwordMatchingValidator
    ]

    this.registrationForm = new FormGroup(controls, validators);
  }

  passwordMatchingValidator(control: AbstractControl): null | ValidationErrors{
    return (control.get('password')?.value === control.get('confirmPassword')?.value)
      ? []
      : {
        notMatched: true
      };
  }

  onSubmit(){
    console.log(this.registrationForm);
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

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
}

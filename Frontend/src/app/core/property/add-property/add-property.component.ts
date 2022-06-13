import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent{

  @ViewChild('Form') addPropertyForm!: NgForm;

  constructor() { }

  onSubmit(){
    console.log(this.addPropertyForm);
  }

}

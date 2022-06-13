import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent {

  public propertyId: number;

  constructor(
    private route: ActivatedRoute
  ) {
    this.propertyId = this.route.snapshot.params['id'];
  }

}

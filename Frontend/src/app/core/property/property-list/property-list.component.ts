import {Component, OnInit} from '@angular/core';
import {HousingService} from "../../../services/housing.service";

@Component({
  selector: 'property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: any;

  constructor(private housing: HousingService) {
  }

  ngOnInit(): void {
    this.housing.getAllProperties().subscribe(
      data => {
        this.properties = data;
      },
      error => {
        console.log(error);
      }
      );
  }

}

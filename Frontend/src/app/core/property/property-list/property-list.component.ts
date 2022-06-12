import {Component, OnInit} from '@angular/core';
import {HousingService} from "../../../services/housing.service";
import {Property} from "../property";

@Component({
  selector: 'property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];

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

import {Component, Input, OnInit} from '@angular/core';
import {HousingService} from "../../../services/housing/housing.service";
import {Property} from "../property";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Property[] = [];
  sellrent: number = 1;

  constructor(
    private route: ActivatedRoute,
    private housing: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.sellrent = 2;
    }
    this.housing.getProperties(this.sellrent).subscribe(
      data => {
        this.properties = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}

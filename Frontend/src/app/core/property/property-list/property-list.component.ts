import {Component, OnInit} from '@angular/core';
import {Property} from "../property";

@Component({
  selector: 'property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties: Array<Property> = [
    {
      id: 1,
      name: 'House1',
      type: 'House',
      price: 1200
    },
    {
      id: 2,
      name: 'Erose Villa',
      type: 'Flat',
      price: 12000
    },
    {
      id: 3,
      name: 'House3',
      type: 'Penthouse',
      price: 5600
    },
    {
      id: 4,
      name: 'House4',
      type: 'House',
      price: 3000
    },
    {
      id: 5,
      name: 'Jopaus',
      type: 'House',
      price: 30430
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

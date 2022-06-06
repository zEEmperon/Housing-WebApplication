import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  property: any = {
    name: 'House12',
    type: 'House',
    price: 1200
  }

  constructor() { }

  ngOnInit(): void {
  }

}

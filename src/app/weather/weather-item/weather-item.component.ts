import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  weather: any;
  constructor() { }

  ngOnInit() {
  }

}

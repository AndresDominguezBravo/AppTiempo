import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from '../forecast.model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  @Input() forecast : Forecast;

  constructor() { }

  ngOnInit(): void {
  }

}

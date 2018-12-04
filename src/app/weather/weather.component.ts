import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Forecast, City, Weather } from '../models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  public forecast: Forecast = {
    city:{
      name: "Santiago",
    }
  };

  public weather:Weather;

  public unit: string= "celsius";
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    /* this.weatherService.getForecast().subscribe((forecast:Forecast)=>{
      console.log("### Forecast",forecast);
      this.forecast = forecast;
    }); */
    this.weatherService.getCurrent().subscribe((weather:Weather)=>{
      console.log("### weather",weather);
      this.weather = weather;
    });
  }

}

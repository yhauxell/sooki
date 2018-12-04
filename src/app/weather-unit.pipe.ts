import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherUnit'
})
export class WeatherUnitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("#### AGGS", args);
    return `${Math.round(value)} ${args == 'celsius' ? ' °C' : "°F"}`;
  }

}

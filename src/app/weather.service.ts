import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Forecast, Weather } from './models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private static CITY = 3873544;
  private static LANG= "es";
  private static DEFAULTCOUNT = 3;
  private static API_URL = 'https://api.openweathermap.org/data/2.5';
  private static ENDPOINT_CURRENT = `/weather`;
  private static ENDPOINT_FORECAST = `/forecast`;

  constructor(private httpClient: HttpClient) { }
  
  public getCurrent(cityId?, count?, lang?){
    let endpoint = WeatherService.ENDPOINT_CURRENT;
    return this.httpClient.get<Weather>(this.getQueryUrl(endpoint)).pipe(
      catchError(this.handleError)
    );
  }
  public getForecast(cityId?, count?, lang?){
    let endpoint = WeatherService.ENDPOINT_FORECAST;
    return this.httpClient.get<Forecast>(this.getQueryUrl(endpoint)).pipe(
      catchError(this.handleError)
    );
  }

  private getQueryUrl(endpoint, cityId=WeatherService.CITY, count=WeatherService.DEFAULTCOUNT, lang=WeatherService.LANG){
    return WeatherService.API_URL + endpoint + `?appid=15fcff81de5f864e51e3140bc22e4209&id=${cityId}&units=metric&lang=${lang}&cnt=${count}`;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}

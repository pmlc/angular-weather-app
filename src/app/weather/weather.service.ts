import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Weather } from '../shared/interfaces/weather';
import { WeatherData } from '../shared/interfaces/weather-data';
import { environment } from '../../environments/environment'

@Injectable({
 providedIn: 'root'
})
export class WeatherService {
  private URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private KEY = environment.OWM_KEY;
  private IMP = '&units=imperial';

 constructor(private http: HttpClient) { }

 searchWeatherData(cityName: string): Observable<any> {
   return this
            .http
            .get<WeatherData>(`${this.URL}${cityName}&APPID=${this.KEY}${this.IMP}`)
            .pipe(
              map(data => this.transformWeatherData(data)),
              tap(data => console.log(JSON.stringify(data))),
              catchError(this.handleError)
            );
 }
 
 private transformWeatherData(data: WeatherData): Weather {
   return {
    name: data.name,
    country: data.sys.country,
    image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
    description: data.weather[0].description,
    temperature: data.main.temp,
    lat: data.coord.lat,
    lon: data.coord.lon
   };
 }
 
 private handleError(res: HttpErrorResponse) {
  console.error(res);
  return throwError(res.error || 'Server error');
 }
}

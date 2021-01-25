import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { WEATHER_URLS } from './constants';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private key = '3d8b309701a13f65b660fa2c64cdc517';

  constructor(private http: HttpClient) {}

  getWeatherForeCast(cityIds) {
    return this.http
      .get(WEATHER_URLS.CITIES_FORECAST(cityIds, this.key))
      .pipe(shareReplay());
  }

  getCityForeCast(cityId) {
    return this.http.get(WEATHER_URLS.CITY_FORECAST(cityId, this.key));
  }
}

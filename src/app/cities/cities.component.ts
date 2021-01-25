import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.less'],
})
export class CitiesComponent implements OnInit {
  weatherReport$: Observable<any>;
  cityIds = [1176734, 5128581, 6160752, 3369157, 2186224];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherReport$ = this.appService
      .getWeatherForeCast(this.cityIds)
      .pipe(map((report: any) => report.list));
  }
}

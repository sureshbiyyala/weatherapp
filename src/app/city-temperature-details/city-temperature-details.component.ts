import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-city-temperature-details',
  templateUrl: './city-temperature-details.component.html',
  styleUrls: ['./city-temperature-details.component.less'],
})
export class CityTemperatureDetailsComponent implements OnInit {
  cityForecast: CityForeCast;
  cityName: string;
  cityTemp: number;
  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((routeParams: Params) => {
      let { id: cityId } = routeParams.params;
      this.cityTemp = history.state.tempe;
      this.getCityForeCast(cityId);
    });
  }

  getCityForeCast(cityId: number) {
    this.appService.getCityForeCast(cityId).subscribe((forecast: ForeCast) => {
      this.cityName = forecast.city.name;
      this.cityForecast = forecast.list
        .filter((hourlyData) => hourlyData.dt_txt.includes('09:00:00'))
        .map((data) => {
          let date = new Date(data.dt_txt).getDate();
          return { ...data, date };
        });
      console.log(this.cityForecast);
    });
  }
}

interface ForeCast {
  city: {
    name: string;
    id: number;
    sunrise: number;
    sunset: number;
  };
  list: any;
}

interface CityForeCast {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    sea_level: number;
  };
}

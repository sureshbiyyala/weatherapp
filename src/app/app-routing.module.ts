import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityTemperatureDetailsComponent } from './city-temperature-details/city-temperature-details.component';

const routes: Routes = [
  {
    path: '',
    component: CitiesComponent,
  },
  {
    path: 'details/:id',
    component: CityTemperatureDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

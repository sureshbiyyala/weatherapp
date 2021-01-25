import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { CityTemperatureDetailsComponent } from './city-temperature-details/city-temperature-details.component';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  declarations: [AppComponent, MomentPipe, CityTemperatureDetailsComponent, CitiesComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

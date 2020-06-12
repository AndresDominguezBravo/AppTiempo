import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherForecastComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
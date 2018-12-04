import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatButtonModule} from '@angular/material';
import { WeatherComponent } from './weather/weather.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FlexLayoutModule } from'@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { WeatherUnitPipe } from './weather-unit.pipe';
import { LiveEventsComponent } from './live-events/live-events.component';
import { LiveEventComponent } from './live-event/live-event.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomePageComponent,
    WeatherUnitPipe,
    LiveEventsComponent,
    LiveEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule, 
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

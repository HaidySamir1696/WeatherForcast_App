import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WeatherComponent } from './views/weather/weather.component';
import { WeatherService } from './services/weather.service';
import { CityComponent } from './views/city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    WeatherComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [
    WeatherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PostsComponent } from './views/posts/posts.component';
import { AnimationComponent } from './views/animation/animation.component';
import { UserService } from './services/user.service';
import { SinglepostComponent } from './views/singlepost/singlepost.component';
import { UpdateComponent } from './views/update/update.component';
import { WeatherComponent } from './views/weather/weather.component';
import { WeatherService } from './services/weather.service';
import { CityComponent } from './views/city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    PostsComponent,
    AnimationComponent,
    SinglepostComponent,
    UpdateComponent,
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

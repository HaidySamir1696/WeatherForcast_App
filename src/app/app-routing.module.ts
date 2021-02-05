import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './views/city/city.component';
import { WeatherComponent } from './views/weather/weather.component';

const routes: Routes = [
  {path:'about/:id',component:CityComponent},
  {path:'',component:WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

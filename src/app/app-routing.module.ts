import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { AnimationComponent } from './views/animation/animation.component';
import { CityComponent } from './views/city/city.component';
import { HomeComponent } from './views/home/home.component';
import { PostsComponent } from './views/posts/posts.component';
import { SinglepostComponent } from './views/singlepost/singlepost.component';
import { UpdateComponent } from './views/update/update.component';
import { WeatherComponent } from './views/weather/weather.component';

const routes: Routes = [
  {path:'us',component:HomeComponent},
  {path:'about',component:CityComponent},
  {path:'',component:WeatherComponent},
  {path:'animation',component:AnimationComponent},
  {path:'singlePost/:id',component:SinglepostComponent},
  {path:'updatePost/:id',component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

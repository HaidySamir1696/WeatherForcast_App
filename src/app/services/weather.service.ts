import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { weather } from '../interfaces/weatherInterface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url='http://api.worldweatheronline.com/premium/v1/weather.ashx?key=dd53a39bf5844155833183234212801&q=France&format=json&num_of_days=5&mca=no'

constructor(private http:HttpClient) { }
lat:any
long:any
url2:string=''
getdim(){
  navigator.geolocation.getCurrentPosition(position =>{
   console.log( this.lat = position.coords.latitude)
    console.log(this.long = position.coords.longitude)
 //   this.url2='http://api.worldweatheronline.com/premium/v1/weather.ashx?key=dd53a39bf5844155833183234212801&q='+this.lat+','+this.long+'&format=json&num_of_days=5&mca=no'
   })
}

getWeather(lat:any,long:any)
 {
   return this.http.get<weather>('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=dd53a39bf5844155833183234212801&q='+lat+','+long+'&format=json&num_of_days=5&mca=no')
 } 
}

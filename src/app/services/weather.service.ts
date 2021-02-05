import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { history } from '../interfaces/history';
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
//  //getting historical forcast for past 5 days before today
//  date:any=new Date(Date.now())
//  day:number=this.date.getDate()
//  month:number=this.date.getMonth()
//  year:number=this.date.getYear()
//  prevDay14:number=(this.date.getDate()-14)%31
//  prevMonth:any
//  prevYear:any 
//  getMonthYear()
//  {
//    if(this.prevDay14>this.day)
//    {
// this.prevMonth=(this.month-1)%12
//    }
//    else {
//      this.prevMonth=this.month
//    }
//    if(this.prevMonth>this.month)
//    {
//      this.prevYear=(this.year-1)%2050
//    }
//    else 
//    {
//      this.prevYear=this.year
//    }

//  }
getHistory(day14:number,monthPrev:number,yearPrev:number,city:string,year:number,month:number,day:number){
  return this.http.get<history>('http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=dd53a39bf5844155833183234212801&q='+city+'&format=json&date='+yearPrev+'-'+monthPrev+'-'+day14+'&enddate='+year+'-'+month+'-'+day+'&tp=24')
//return this.http.get<history>('http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=dd53a39bf5844155833183234212801&q=luxor&format=json&date=2021-01-17&enddate=2021-02-2&tp=24')
console.log('http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=dd53a39bf5844155833183234212801&q='+city+'&format=json&date=2021-'+monthPrev+'-'+day14+'&enddate=2021-'+month+'-'+day+'&tp=24')
}

getWeatherbyCity(city:string)                                                                
{
  return this.http.get<weather>('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=dd53a39bf5844155833183234212801&q='+city+'&format=json&num_of_days=5&mca=no')
  
}
}

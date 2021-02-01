import { Component, OnInit } from '@angular/core';
import { request, weather } from 'src/app/interfaces/weatherInterface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
weather:any
type: string=''
hourly:any
days:any
  constructor(private weatherservice:WeatherService) { }
getWeather(){
  return this.weatherservice.getWeather(this.lat,this.long).subscribe((res)=>{this.weather=res
this.hourly=this.weather.data.weather[0].hourly
this.days=this.weather.data.weather
},(error)=>{

    console.log(error)
  }
  )
}
lat:any
long:any
country:string=""
source:string=""
backgroundImg:string="../../assets/background.jpg"
/////////
todayDate:any = new Date();
weekday:string[] = ["Sunday","Mon","Tues","Wed","Thurs","Fri","Sat"]
todayname:string = this.weekday[this.todayDate.getDay()];
getNextday(i:number){

  return this.weekday[(this.todayDate.getDay()+(i%7))%7]

}
/////////////
getcountry(lat:any,long:any){
if(long<34 && long >26){
  if(lat<32 && lat>22)
{
  this.country="egypt"
}
}
this.getimage(this.country)
}

getimage(country:string){

  this.source= "../../assets/"+country+".jpg "

}
getdim(){
  navigator.geolocation.getCurrentPosition(position =>{
    console.log( this.lat = position.coords.latitude)
     console.log(this.long = position.coords.longitude)
     this.getWeather()
     this.getcountry(this.lat,this.long)
  })

  
}
  ngOnInit(): void {
    this.getdim()
   // this.getWeather()
  }

}

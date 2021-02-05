import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { historyData, weather_condition } from 'src/app/interfaces/history';
import { WeatherService } from 'src/app/services/weather.service';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  history:any
  weather:any
  type: string=''
  hourly:any
  days:any
  city:string=this.route.snapshot.params.id
  source:string= "../../assets/"+this.city+".jpg "
  backgroundImg:string="../../assets/background.jpg"
  backgroundCity:string="../../assets/../../assets/"+this.city+"Background.jpg"
  constructor(private weatherservice:WeatherService,private route:ActivatedRoute) {
    this.width = 1100 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
  
   }
  getWeather(){
    return this.weatherservice.getWeatherbyCity(this.city).subscribe((res)=>{this.weather=res
  this.hourly=this.weather.data.weather[0].hourly
  this.days=this.weather.data.weather
  },(error)=>{
  
      console.log(error)
    }
    )
   }
   ///////data of date
    //getting historical forcast for past 5 days before today
 date:Date=new Date(Date.now())
 day:number=this.date.getDate()
 month:number=this.date.getMonth()+1 
 year:number=this.date.getFullYear()
 prevDay14:number=(this.date.getDate()-14)
 day14:number=((this.prevDay14%31)+31)%31
 prevMonth:any
 prevYear:any 
 historyWeather:weather_condition[] =[]
 getMonthYear()
 {
   if(this.day14>this.day)
   {
this.prevMonth=(((this.month-1)%12)+12)%12
   }
   else {
     this.prevMonth=this.month
   }
   if(this.prevMonth>this.month)
   {
     this.prevYear=(this.year-1)
   }
   else 
   {
     this.prevYear=this.year
   }
   this.getHistory()

   console.log(this.day14,this.prevDay14,this.prevMonth,this.prevYear,this.city,this.year,this.month,this.day)
  }
   //////historical function
   getHistory(){
    return this.weatherservice.getHistory(this.day14,this.prevMonth,this.prevYear,this.city,this.year,this.month,this.day).subscribe((res)=>{
      this.history=res
      this.historyWeather=this.history.data.weather
      this.getHistoryData()
      this.initSvg();
      this.initAxis();
      this.drawAxis();
      this.drawBars(this.historyData)
     
  },(error)=>{
  
      console.log(error)
    }
    )
   }
   todayDate:any = new Date();
weekday:string[] = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"]
todayname:string = this.weekday[this.todayDate.getDay()];
getNextday(i:number){

  return this.weekday[(this.todayDate.getDay()+(i%7))%7]

}
///////////history array 
historyData:historyData[]=[]
getHistoryData(){
this.historyWeather.forEach((weatherItem) => {
 this.historyData.push({
   "date":weatherItem.date,
   "maxtempC":weatherItem.maxtempC,
   "mintempC":weatherItem.mintempC
 }) 
  });
}
/////////////////////////
historyData2:any[]=[{date:"1-2-2021",maxtempC:"12",mintempF:"10"},
{date:"9-2-2021",maxtempC:"14",mintempF:"10"},
{date:"5-2-2021",maxtempC:"17",mintempF:"10"}]
currentRate = 8;
title = 'D3 Barchart with Angular 10';
width: number;
height: number;
margin = { top: 20, right: 20, bottom: 30, left: 40 };
x: any;
y: any;
svg: any;
g: any;

//
initSvg() {
  this.svg = d3.select('#barChart')
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('viewBox', '0 0 900 500');
  this.g = this.svg.append('g')
    .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
}

initAxis() {
  this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
  this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
  this.x.domain(this.historyData.map((d) => d.date));
  this.y.domain([0,d3Array.max(this.historyData, (d) => d.maxtempC)]);
}

drawAxis() {
  this.g.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + this.height + ')')
    .call(d3Axis.axisBottom(this.x));
  this.g.append('g')
    .attr('class', 'axis axis--y')
    .call(d3Axis.axisLeft(this.y))
    .append('text')
    .attr('class', 'axis-title')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('maxtempC');
}

drawBars(data:any[]) {
  this.g.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', (d:any) => this.x(d.date))
    .attr('y', (d:any) => this.y(parseInt(d.maxtempC)))
    .attr('width', 40)
    .attr('fill', '#236c99')
    .attr('height', (d:any) => this.height - this.y(parseInt(d.maxtempC)));
}


//////////////////////////
  ngOnInit(): void {
    this.getWeather()
   this.getMonthYear()
  //  this.initSvg();
  //  this.initAxis();
  //  this.drawAxis();
// this.drawBars();

  }

}

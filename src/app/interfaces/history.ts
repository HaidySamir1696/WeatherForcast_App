import { } from "./weatherInterface";

export interface history {
    data?:{
        request?:request[],
        weather?:weather_condition[]    
    }

}
export interface request {
    type?:String,
    query?:String
}
export interface historyData{
    date?:string,
    maxtempC?: string,
    mintempC?:string


}
export interface weather_condition{
    date?: string,
    astronomy?: [
    {
    sunrise?:string,
    sunset?: string,
    moonrise?: string,
    moonset?: string,
    moon_phase?: string,
    moon_illumination?: string
    }
    ],
    maxtempC?: string,
    maxtempF?: string,
    mintempC?:string,
    mintempF?: string,
    avgtempC?: string,
    avgtempF?: string,
    totalSnow_cm?: string,
    sunHour?:string,
    uvIndex?: string,
    hourly?:Hourly []

}
export interface Hourly{
    time?:string,
tempC?:string,
tempF?:string,
windspeedMiles?:string,
windspeedKmph?:string,
winddirDegree?:string,
winddir16Point?:string,
weatherCode?:string,
weatherIconUrl?: [
{
value?:string}
],
weatherDesc?: [
{
value?:string
}
],
precipMM?:string,
precipInches?:string,
humidity?:string,
visibility?:string,
visibilityMiles?:string,
pressure?:string,
pressureInches?:string,
cloudcover?:string,
HeatIndexC?:string,
HeatIndexF?:string,
DewPointC?:string,
DewPointF?:string,
WindChillC?:string,
WindChillF?:string,
WindGustMiles?:string,
WindGustKmph?:string,
FeelsLikeC?:string,
FeelsLikeF?:string,
chanceofrain?:string,
chanceofremdry?:string,
chanceofwindy?:string,
chanceofovercast?:string,
chanceofsunshine?:string,
chanceoffrost?:string,
chanceofhightemp?:string,
chanceoffog?:string,
chanceofsnow?:string,
chanceofthunder?:string,
uvIndex?:string
}

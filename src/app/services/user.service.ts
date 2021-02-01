import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userinterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
allusers:Users[]=
[{id:1,name:'ahmed'}]
get(){
 return this.allusers
}
  constructor() { }
}

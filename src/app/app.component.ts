import { guardedExpression } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'youtube';
  firstName='Gurpreet';
  lastName="Kaur"
  name=this.firstName+this.lastName;
  getName(){
    return this.firstName;
  }
  obj={
    name:"saumya",
    age:23
  }
  arr=['anu','riya','spna']
  num1=12
  num2=45
  siteUrl=window.location.href
  // myEvent(num1,num2){
  //   console.warn(num1+num2);
  // }
  myEvent(num1,num2){
    return num1+num2;
  }
}

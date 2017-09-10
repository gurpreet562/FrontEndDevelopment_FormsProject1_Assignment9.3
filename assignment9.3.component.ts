import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`input.ng-invalid{border-left:5px solid red;}
   input.ng-valid{border-left:5px solid green;}`
 ]
})
export class AppComponent {
  myName="sakshi"
  email="sakshi@gmail.com"

  city="Select Option"
  cities:any=[
    {name:"hyderabad"},
    {name:"kolkata"},
    {name:"noida"}

  ]

    onSubmit(value:any){
    console.log(value);
  }
}

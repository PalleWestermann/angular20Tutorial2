import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isParaVisible: boolean = true;

  startMonthName: string = "feb";

  cityList: string[] = ["Pune", "Mumbai", "Panji", "Nagpur"];

  studentList: any [] = [
    {name: 'AAAA', city:'Pune', isActive:false},
    {name: 'BB', city:'Mumbai', isActive:false},
    {name: 'CCC', city:'Pune', isActive:true},
    {name: 'DDD', city:'Nagpur', isActive:false},
  ];

  hideP() {
    this.isParaVisible = false;
  }
  showP() {
    this.isParaVisible = true;
  }

}

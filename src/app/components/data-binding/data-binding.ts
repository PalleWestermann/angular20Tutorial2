import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  courseName: string ="Angular 20 Tutorial";
  productPrice : number = 12500;
  maxLength: number = 5;
  minChar : number = 3;
  myClassName : string = "myColor";

  constructor() {

  }

  showWelcomeMessage() {
    alert("Welcome to Angular 20");
  }

  onCityChange() {
    alert('City changed...');
  }
}

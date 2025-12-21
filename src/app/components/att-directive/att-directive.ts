import { Component, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective {

  div1ClassName = signal<string>("");

  isDiv2Green: boolean = false;

  setBgClass(className:string) {
    this.div1ClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }
}

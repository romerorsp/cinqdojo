import { RomanCalculator } from './../calculator/roman-calculator';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const calculator = new RomanCalculator();
    // console.log(calculator.toRoman(4));
  }
}

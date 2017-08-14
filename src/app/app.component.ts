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
    console.log(calculator.toNumber('I'));
    console.log(calculator.toNumber('III'));
    console.log(calculator.toNumber('IV'));
    console.log(calculator.toNumber('V'));
    console.log(calculator.toNumber('VIII'));
    console.log(calculator.toNumber('IX'));
    console.log(calculator.toNumber('X'));
    console.log(calculator.toNumber('MCDXIII'));
    console.log(calculator.toNumber('MXXXVI'));
  }
}

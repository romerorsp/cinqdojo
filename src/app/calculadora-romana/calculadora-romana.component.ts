import { RomanCalculator } from './../../calculator/roman-calculator';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel


@Component({
  selector: 'app-calculadora-romana',
  templateUrl: './calculadora-romana.component.html',
  styleUrls: ['./calculadora-romana.component.css']
})

export class CalculadoraRomanaComponent implements OnInit {

  public result: string = null;
  public roman: string = null;
  public current: string = null;
  private reset = true;
  private calculator = new RomanCalculator();
  private pendingCalc: (value: string) => void = null;

  ngOnInit() {}

  public add(): void {
    this.setOperation(value => this.calculator.add(value));
  }

  public sub(): void {
    this.setOperation(value => this.calculator.sub(value));
  }

  public div(): void {
    this.setOperation(value => this.calculator.div(value));
  }

  public mul(): void {
    this.setOperation(value => this.calculator.mul(value));
  }

  public ce(): void {
    this.calculator.ce();
    this.pendingCalc = null;
    this.setCurrentResults();
    this.current = null;
  }

  public calculate(): void {
    this.pendingCalc(this.current);
    this.pendingCalc = null;
    this.setCurrentResults();
    this.current = this.roman;
  }

  public type(value: string): void {
    if (this.reset) {
      this.current = value;
      this.reset = false;
    } else {
      this.current = this.current.concat(value);
    }
  }

  private setCurrentResults(): void {
    this.reset = true;
    this.roman = this.calculator.getRomanComputed();
    this.result = this.calculator.getComputed() > 0 ? this.calculator.getComputed().toString() : null;
  }

  private setOperation(func: (value: string) => void): void {
    if (this.pendingCalc === null) {
      this.calculator.setCurrent(this.current);
      this.pendingCalc = func;
      this.roman = this.current;
      this.result = this.calculator.toNumber(this.roman).toString();
      this.reset = true;
    } else {
      this.pendingCalc(this.current);
      this.pendingCalc = func;
      this.setCurrentResults();
    }
  }
}

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

  result = '';
  valor = '';
  roman = '';
  private _calculadora = new RomanCalculator();

  constructor() {
  }

  ngOnInit() {
    this.result = '';
    this.valor = '';
  }

  somar() {
    this._calculadora.add(this.valor);
    this.result = this._calculadora.getComputed().toString();
    this.roman = this._calculadora.toRoman(this._calculadora.getComputed());
  }

  sub() {
    this._calculadora.sub(this.valor);
    this.result = this._calculadora.getComputed().toString();
  }

  div() {
    this._calculadora.div(this.valor);
    this.result = this._calculadora.getComputed().toString();
  }

  mul() {
    this._calculadora.mul(this.valor);
    this.result = this._calculadora.getComputed().toString();
  }

  ce() {
    this._calculadora.ce();
    this.result = this._calculadora.getComputed().toString();
  }

}

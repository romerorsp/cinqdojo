import { Component, OnInit } from '@angular/core';
import { KeyValue } from "app/calculadora-romana/key-value";

@Component({
  selector: 'app-calculadora-romana',
  templateUrl: './calculadora-romana.component.html',
  styleUrls: ['./calculadora-romana.component.css']
})
export class CalculadoraRomanaComponent implements OnInit {

  traducao: Array<KeyValue> = new Array<KeyValue>();


  primeiroNumero: string;
  segundoNumero: string;

  constructor() {
    this.traducao.push(new KeyValue('I', 1));
    this.traducao.push(new KeyValue('V', 5));
    this.traducao.push(new KeyValue('X', 10));
    this.traducao.push(new KeyValue('L', 50));
    this.traducao.push(new KeyValue('C', 100));
    this.traducao.push(new KeyValue('D', 500));
    this.traducao.push(new KeyValue('M', 1000));
  }



  ngOnInit() {
  }

  soma(num1: string, num2: string): string {
    //let soma = this.traducao[num1] + this.traducao[num2];
    //this.traducao.find()
    let soma = this.traducao.find
      (
      c => c.key === num1
      ).value;


    soma += this.traducao.find(
      c => c.key === num2
    ).value;

    return this.traducao.find(
      c => c.value === soma
    ).key;
  }

  traduz(num :number):string {
    let result='';
    if (num < 4){
      for(let x = 0; x < num; x++){
        result += 'I';
      }
    }
    


    return result;
  }

  subtrai(num1: string, num2: string): string {
    //let soma = this.traducao[num1] + this.traducao[num2];
    //this.traducao.find()
    let soma = this.traducao.find
      (
      c => c.key === num1
      ).value;


    soma -= this.traducao.find(
      c => c.key === num2
    ).value;

    return this.traducao.find(
      c => c.value === soma
    ).key;;
  }


}

import { KeyValue } from './key-value';
export class RomanCalculator {

  private static mapping: Array<KeyValue> = [
    {key: 1, value: 'I'},
    {key: 4, value: 'IV'},
    {key: 5, value: 'V'},
    {key: 9, value: 'IX'},
    {key: 10, value: 'X'},
    {key: 40, value: 'XL'},
    {key: 50, value: 'L'},
    {key: 90, value: 'XC'},
    {key: 100, value: 'C'},
    {key: 400, value: 'CD'},
    {key: 500, value: 'D'},
    {key: 900, value: 'CM'},
    {key: 1000, value: 'M'}
  ];

  private computed = 0;

  public ce(): void {
    this.computed = 0;
  }

  public toNumber(value: string): number {
    let result = 0;
    for (let i = 0; i < value.length - 1; i++) {
      const a = RomanCalculator.mapping.find(mapped => mapped.value === value.charAt(i)).key;
      const b = RomanCalculator.mapping.find(mapped => mapped.value === value.charAt(i + 1)).key;
      result += a >= b ? a : (a * -1);
    }
    return result + RomanCalculator.mapping.find(mapped => mapped.value === value.charAt(value.length - 1)).key;
  }

  public toRoman(value: number): string {
    let result = '';
    while (value > 0) {
      for (let i = RomanCalculator.mapping.length - 1; i >= 0; i--) {
        const mapped = RomanCalculator.mapping[i].key;
        while (value - mapped >= 0) {
          result += RomanCalculator.mapping[i].value;
          value -= mapped;
        }
      }
    }
    return result;
  }

  public add(value: string): void {
    this.computed += this.toNumber(value);
  }

  public sub(value: string): void {
    this.computed -= this.toNumber(value);
  }

  public mul(value: string): void {
    this.computed *= this.toNumber(value);
  }

  public div(value: string): void {
    this.computed /= this.toNumber(value);
  }

  public getComputed(): number {
    return this.computed;
  }

  public getRomanComputed(): string {
    return this.toRoman(this.getComputed());
  }

  public setCurrent(value: string): void {
    this.computed = this.toNumber(value);
  }
}

import { RomanCalculator } from './roman-calculator';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('RomanCalculator', () => {
  it('Assert the toNumber method works', () => {
    const calculator = new RomanCalculator();
    expect(calculator.toNumber('I')).toBe(1);
    expect(calculator.toNumber('III')).toBe(3);
    expect(calculator.toNumber('IV')).toBe(4);
    expect(calculator.toNumber('V')).toBe(5);
    expect(calculator.toNumber('VIII')).toBe(8);
    expect(calculator.toNumber('IX')).toBe(9);
    expect(calculator.toNumber('X')).toBe(10);
    expect(calculator.toNumber('MCDXIII')).toBe(1000 + 500 + 10 + 3);
    expect(calculator.toNumber('MXXXVI')).toBe(1000 + 30 + 6);
  });

  it('Assert the toRoman method works', () => {
    const calculator = new RomanCalculator();
    expect(calculator.toRoman(1)).toBe('I');
    expect(calculator.toRoman(3)).toBe('III');
    expect(calculator.toRoman(4)).toBe('IV');
    expect(calculator.toRoman(5)).toBe('V');
    expect(calculator.toRoman(8)).toBe('VIII');
    expect(calculator.toRoman(9)).toBe('IX');
    expect(calculator.toRoman(10)).toBe('X');
    expect(calculator.toRoman(1000 + 500 + 10 + 3)).toBe('MCDXIII');
    expect(calculator.toRoman(1000 + 30 + 6)).toBe('MXXXVI');
  });

  it('Assert the math in the roman calculator works', () => {
    const calculator = new RomanCalculator();
    calculator.add('I');
    expect(calculator.getComputed()).toBe(1);
    calculator.add('III');
    expect(calculator.getComputed()).toBe(4);
    calculator.add('IV');
    expect(calculator.getComputed()).toBe(8);
    calculator.sub('III');
    expect(calculator.getComputed()).toBe(5);
    calculator.mul('III');
    expect(calculator.getComputed()).toBe(5);
    calculator.div('V');
    expect(calculator.getComputed()).toBe(3);
    calculator.ce();
    expect(calculator.getComputed()).toBe(0);
    calculator.add('III');
    expect(calculator.getComputed()).toBe(3);
  });
});

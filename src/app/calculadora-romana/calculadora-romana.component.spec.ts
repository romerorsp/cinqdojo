import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraRomanaComponent } from './calculadora-romana.component';

describe('CalculadoraRomanaComponent', () => {
  let component: CalculadoraRomanaComponent;
  let fixture: ComponentFixture<CalculadoraRomanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraRomanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraRomanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve adicionar dois numeros romanos', () => {

    expect(component.soma('V', 'V')).toBe('X');
  });

  it ('deve traduzir o número 3 em romanos', () => {
    expect(component.traduz(3)).toBe('III');
  });
});

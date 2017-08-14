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

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

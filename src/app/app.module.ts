import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraRomanaComponent } from './calculadora-romana/calculadora-romana.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraRomanaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

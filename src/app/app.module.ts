import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel

import { AppComponent } from './app.component';
import { CalculadoraRomanaComponent } from './calculadora-romana/calculadora-romana.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraRomanaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

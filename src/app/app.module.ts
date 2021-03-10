import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe'; // -> imported filter pipe

// NECESARIO PARA PIPE CURRENCY!:
import { LOCALE_ID } from '@angular/core';
import '@angular/common/locales/global/es';
@NgModule({
  declarations: [
    AppComponent, FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

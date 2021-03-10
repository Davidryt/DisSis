import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FilterPipe } from './filter.pipe'; // -> imported filter pipe

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe // -> added filter pipe to use it inside the component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Car Comparator Filter';
  searchText = '';
  characters = [
    'AUDI',
    'TESLA',
    'MERCEDES BENZ',
    'SEAT',
    'TOYOTA',
    'COCHES',
    'NOSE',
    'NO_ENTIENDO_DE_COCHES'
  ]
}
import { Component } from '@angular/core';
import { Coche, EstadoCoche } from './coche/coche';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public EstadoCoche: any = EstadoCoche; // ESTA LINEA SOLO SIRVE PARA PODER USAR EstadoCoche en el TEMPLATE.
  public coches: Array<Coche> = [
    new Coche('renault', 'scenic', new Date(2007, 10, 1), new Date(2018, 3, 1), 5000, 'coche01.jpg', EstadoCoche.BUENO),
    new Coche('renault', 'scenic', new Date(2007, 10, 1), new Date(2018, 3, 1), 5000, 'coche01.jpg', EstadoCoche.BUENO),
    new Coche('renault', 'scenic', new Date(2007, 10, 1), new Date(2018, 3, 1), 5000, 'coche01.jpg', EstadoCoche.BUENO)
  ];
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
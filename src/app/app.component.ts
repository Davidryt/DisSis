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
    new Coche('renault', 'scenic', new Date(2007, 10, 1), new Date(2018, 3, 1), 6500, 'coche01.jpg', EstadoCoche.BUENO),
    new Coche('SEAT', 'ibiza', new Date(2011, 10, 1), new Date(2019, 3, 1), 12000, 'coche02.jpg', EstadoCoche.BUENO),
    new Coche('renault', 'laguna', new Date(2012, 10, 1), new Date(2017, 1, 1), 3000, 'coche03.jpg', EstadoCoche.BUENO),
    new Coche('TESLA', 'model 3', new Date(2017, 10, 1), new Date(2020, 5, 1), 45000, 'coche04.jpg', EstadoCoche.BUENO)
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
  public deleteCoche(coche: Coche) {
    this.coches.splice(this.coches.indexOf(coche), 1);
  }
  public rebajarCoche(coche: Coche) {
    coche.$precio *= 0.9;
  }
}
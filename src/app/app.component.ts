import { Component } from '@angular/core';
import { Contacto } from './contacto/contacto';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Cambiar a los contactos, objeto por contacto con los valores y crear array

export class AppComponent {
  public contactos: Array<Contacto> = [
    new Contacto('David', 'Rico','Avenida Bad Bunny,15' ,new Date(1999, 7,28), 644220727, 'Google','Tiene calle','no se'),
    new Contacto('pepe', 'Rico','Avenida aaaaaaaaa' ,new Date(1999, 7,28), 1234, 'Tesla','idk','no se'),
    new Contacto('jaime', 'bbbbbbb','Avenida bbbbbbbb' ,new Date(1999, 7,28), 5678, 'Audi','','no se'),
    new Contacto('javie', 'cccccccc','Avenida cccccccc' ,new Date(1999, 7,28), 1357, 'Carrefour','vaya con el carrefour','no se'),
    new Contacto('ignacio', 'ddddddd','Avenida dddddddd' ,new Date(1999, 7,28), 2468, 'Patata','gym boi','no se')
    
  ];

  title = 'Contact Filter';
  searchText = '';
  characters = [
    'DAVID',
    'PEPE',
    'JAIME',
    'JAVIER',
    'IGNACIO',
  ]
  public deleteContact(value: Contacto) {
    this.contactos.splice(this.contactos.indexOf(value), 1);
  }
  
}
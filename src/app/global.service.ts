import { Injectable } from '@angular/core';
import { Contacto } from './contacto/contacto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public contactos: Array<Contacto> = [
    new Contacto('David', 'Rico','Avenida Bad Bunny,15' ,new Date(1999, 7,28), 644220727, 'Google','Tiene calle','no se'),
    new Contacto('pepe', 'Rico','Avenida aaaaaaaaa' ,new Date(1999, 7,28), 1234, 'Tesla','idk','no se'),
    new Contacto('jaime', 'bbbbbbb','Avenida bbbbbbbb' ,new Date(1999, 7,28), 5678, 'Audi','','no se'),
    new Contacto('javie', 'cccccccc','Avenida cccccccc' ,new Date(1999, 7,28), 1357, 'Carrefour','vaya con el carrefour','no se'),
    new Contacto('ignacio', 'ddddddd','Avenida dddddddd' ,new Date(1999, 7,28), 2468, 'Patata','gym boi','no se')
    
  ];

  public borrar(id: number)
  {
    this.contactos.splice(id,1);
  }

  public updateContacto(id:number,contacto:Contacto)
  {
    this.contactos[id]=contacto;
  }
  public getContacto(id:number)
  {
    return this.contactos[id];
  }

  public nuevoContacto(contacto:Contacto)
  {
    this.contactos.push(contacto);
  }

  public getNContactos()
  {
    return this.contactos.length;
  }
}

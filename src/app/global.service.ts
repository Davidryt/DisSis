import { Injectable } from '@angular/core';
import { Contacto } from './contacto/contacto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public contactos: Array<Contacto> = [
    new Contacto('David', 'Rico','Avenida Bad Bunny,15' ,new Date(1999, 7,28), 644220727, 'Google','Solucionador de problemas','Trabajo'),
    new Contacto('Ana', 'Rico','Avenida de la estacion' ,new Date(2002, 5,14), 632784609, 'Tesla','','Personal'),
    new Contacto('Jaime', 'Pavon','Paseo de las desgracias' ,new Date(1978, 9,11), 722480757, 'Audi','','Personal'),
    new Contacto('Javier', 'Lopez','Calle Libreros' ,new Date(1989,1,30), 611097865, 'Carrefour','Ojo con el carrefour',''),
    new Contacto('Ignacio', 'Palacios','Calle Cuenca' ,new Date(1964, 2,3), 735340956, 'Ubisoft','Hace juegos','Trabajo')
    
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

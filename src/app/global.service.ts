import { Injectable } from '@angular/core';
import { paciente } from './paciente/paciente';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  public pacientes: Array<paciente> = [
    new paciente(
      'David',
      'Rico Pérez',
      [true, false, false],
      '105',
      '',
      true,
      'ivan'
    ),
    new paciente(
      'Pepe',
      'Timón Martínez',
      [true, false, false],
      '',
      '',
      true,
      'ivan'
    ),
    new paciente('Lucía', 'Dorado Loto', [true, false, false], '', '', true),
    new paciente('Jaime', 'Castaño Pino', [true, false, false], '', '', true),
    new paciente(
      'Javier',
      'Pedreira Rato',
      [true, false, false],
      '',
      '140',
      true
    ),
    new paciente(
      'Ignacio',
      'Comín Sanchez',
      [true, false, false],
      '',
      '',
      true
    ),
    new paciente('Mónica', 'Martín Porto', [false, true, false], '', '', false),
    new paciente('Luis', 'Cortés Lope', [true, false, false], '', '', true),
    new paciente(
      'Paola',
      'Martínez Ruiz',
      [true, false, false],
      '95',
      '125',
      true
    ),
    new paciente('Remi', 'Gallego Casilda', [true, false, false], '', '', true),
    new paciente(
      'Pedro',
      'Vega Castizo',
      [true, false, false],
      '',
      '115',
      true
    ),
    new paciente(
      'Loretto',
      'Caso Lotopero',
      [true, false, false],
      '',
      '140',
      true
    ),
    new paciente('Demisa', 'Corto Luiz', [true, false, false], '90', '', true),
    new paciente('Javier', 'Costro Polo', [false, true, false], '', '', false),
  ];

  public borrar(id: number) {
    this.pacientes.splice(id, 1);
  }

  public updatepaciente(id: number, pac: paciente) {
    this.pacientes[id] = pac;
  }
  public getpaciente(id: number) {
    return this.pacientes[id];
  }

  public nuevopaciente(pac: paciente) {
    this.pacientes.push(pac);
  }

  public getNpacientes() {
    return this.pacientes.length;
  }
}

import { Injectable } from '@angular/core';
import { paciente } from './paciente/paciente';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  public pacientes: Array<paciente> = [
    new paciente('David', 'Rico', [true, false, false], '10', '', true),
    new paciente('pepe', 'Rico', [true, false, false], '', '', true),
    new paciente('jaime', 'bbbbbbb', [true, false, false], '', '', true),
    new paciente('javie', 'cccccccc', [true, false, false], '', '130', true),
    new paciente('ignacio', 'ddddddd', [true, false, false], '', '', true),
  ];

  public borrar(id: number) {
    this.pacientes.splice(id, 1);
  }

  public updatepaciente(id: number, paciente: paciente) {
    this.pacientes[id] = paciente;
  }
  public getpaciente(id: number) {
    return this.pacientes[id];
  }

  public nuevopaciente(paciente: paciente) {
    this.pacientes.push(paciente);
  }

  public getNpacientes() {
    return this.pacientes.length;
  }
}

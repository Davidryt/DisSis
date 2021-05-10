import { Component } from '@angular/core';
export class paciente {
  private nombre: string;
  private apellido: string;
  private comidas: boolean[];
  private oxygen: string;
  private pressure: string;
  private family: string;
  private observacion: boolean;

  constructor(
    $nombre?: string,
    $apellido?: string,
    $comidas?: boolean[],
    $oxygen?: string,
    $pressure?: string,
    $observacion?: boolean,
    $family?: string
  ) {
    this.nombre = $nombre || '';
    this.apellido = $apellido || '';
    this.comidas = $comidas || [false, false, false];
    this.oxygen = $oxygen || '';
    this.pressure = $pressure || '';
    this.observacion = $observacion || false;
    this.family = $family || '';
  }

  /**
   * Getter $marca
   * @return {string}
   */
  public get $nombre(): string {
    return this.nombre;
  }
  public get $apellido(): string {
    return this.apellido;
  }
  public get $comidas(): boolean[] {
    return this.comidas;
  }
  public get $oxygen(): string {
    return this.oxygen;
  }
  public get $pressure(): string {
    return this.pressure;
  }
  public get $family(): string {
    return this.family;
  }
  public get $observacion(): boolean {
    return this.observacion;
  }
  public getAll(): Array<any> {
    return [this.nombre, this.apellido];
  }

  public set $nombre(value: string) {
    this.nombre = value;
  }
  public set $apellido(value: string) {
    this.apellido = value;
  }
  public set $comidas(value: boolean[]) {
    this.comidas = value;
  }
  public set $oxygen(value: string) {
    this.oxygen = value;
  }
  public set $pressure(value: string) {
    this.pressure = value;
  }
  public set $observacion(value: boolean) {
    this.observacion = value;
  }
}

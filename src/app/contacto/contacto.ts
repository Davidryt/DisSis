import { Component } from '@angular/core';
export class Contacto {
  private nombre: string;
  private apellido: string;
  private direc: string;
  private cumpl: Date;
  private telf: number;
  private emp: string;
  private knol: string;
  private tipo: string;

  constructor(
    $nombre?: string,
    $apellido?: string,
    $direc?: string,
    $cumpl?: Date,
    $telf?: number,
    $emp?: string,
    $knol?: string,
    $tipo?: string
  ) {
    this.nombre = $nombre || '';
    this.apellido = $apellido || '';
    this.direc = $direc || '';
    this.cumpl = $cumpl || new Date();
    this.telf = $telf || 0;
    this.emp = $emp || '';
    this.knol = $knol || '';
    this.tipo = $tipo || '';
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
  public get $direc(): string {
    return this.direc;
  }
  public get $cumpl(): Date {
    return this.cumpl;
  }
  public get humanDate(): string {
    this.cumpl.setUTCHours(12);
    console.log(this.cumpl.toISOString().substring(0, 10));
    return this.cumpl.toISOString().substring(0, 10);
  }
  public get $telf(): number {
    return this.telf;
  }
  public get $emp(): string {
    return this.emp;
  }
  public get $knol(): string {
    return this.knol;
  }
  public get $tipo(): string {
    return this.tipo;
  }
  public getAll(): Array<string> {
    return [
      this.nombre,
      this.apellido,
      this.direc,
      this.cumpl.toDateString(),
      String(this.telf),
      this.emp,
      this.knol,
      this.tipo,
    ];
  }

  public set $nombre(value: string) {
    this.nombre = value;
  }
  public set $apellido(value: string) {
    this.apellido = value;
  }
  public set $direc(value: string) {
    this.direc = value;
  }
  public set $cumpl(value: Date) {
    this.cumpl = new Date(value);
  }
  public set humanDate(value: string) {
    const values = value.split('-');
    let d = new Date(
      Date.UTC(
        parseInt(values[0]),
        parseInt(values[1]) - 1,
        parseInt(values[2])
      )
    );
    this.cumpl.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  }
  public set $telf(value: number) {
    this.telf = value;
  }
  public set $emp(value: string) {
    this.emp = value;
  }
  public set $knol(value: string) {
    this.knol = value;
  }
  public set $tipo(value: string) {
    this.tipo = value;
  }
}

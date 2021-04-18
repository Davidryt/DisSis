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

    constructor($nombre: string, $apellido: string, $direc: string, $cumpl: Date, $telf: number, $emp: string, $knol: string, $tipo: string) {
        this.nombre = $nombre;
        this.apellido = $apellido;
        this.direc = $direc;
        this.cumpl = $cumpl;
        this.telf = $telf;
        this.emp = $emp;
        this.knol = $knol;
        this.tipo = $tipo;
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
        this.cumpl = value;
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

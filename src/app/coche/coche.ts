import { Component } from '@angular/core';

export enum EstadoCoche {
    BUENO,
    MALO
}
export class Coche {

    private marca: string;
    private modelo: string;
    private foto: string;
    private fecha_modelo: Date;
    private fecha_venta: Date;
    private precio: number;
    private estado: EstadoCoche;

    constructor($marca: string, $modelo: string, $fecha_modelo: Date, $fecha_venta: Date, $precio: number, $foto: string, $estado: EstadoCoche) {
        this.marca = $marca;
        this.modelo = $modelo;
        this.foto = $foto;
        this.fecha_modelo = $fecha_modelo;
        this.fecha_venta = $fecha_venta;
        this.precio = $precio;
        this.estado = $estado;
    }

    /**
     * Getter $marca
     * @return {string}
     */
    public get $marca(): string {
        return this.marca;
    }
    public get PVP(): number {
        return this.precio * 1.21;
    }

    /**
     * Getter $modelo
     * @return {string}
     */
    public get $modelo(): string {
        return this.modelo;
    }

    /**
     * Getter $foto
     * @return {string}
     */
    public get $foto(): string {
        return this.foto;
    }

    /**
     * Getter $fecha_modelo
     * @return {Date}
     */
    public get $fecha_modelo(): Date {
        return this.fecha_modelo;
    }

    /**
     * Getter $fecha_venta
     * @return {Date}
     */
    public get $fecha_venta(): Date {
        return this.fecha_venta;
    }

    /**
     * Getter $precio
     * @return {number}
     */
    public get $precio(): number {
        return this.precio;
    }

    /**
     * Getter $estado
     * @return {EstadoCoche}
     */
    public get $estado(): EstadoCoche {
        return this.estado;
    }

    /**
     * Setter $marca
     * @param {string} value
     */
    public set $marca(value: string) {
        this.marca = value;
    }

    /**
     * Setter $modelo
     * @param {string} value
     */
    public set $modelo(value: string) {
        this.modelo = value;
    }

    /**
     * Setter $foto
     * @param {string} value
     */
    public set $foto(value: string) {
        this.foto = value;
    }

    /**
     * Setter $fecha_modelo
     * @param {Date} value
     */
    public set $fecha_modelo(value: Date) {
        this.fecha_modelo = value;
    }

    /**
     * Setter $fecha_venta
     * @param {Date} value
     */
    public set $fecha_venta(value: Date) {
        this.fecha_venta = value;
    }

    /**
     * Setter $precio
     * @param {number} value
     */
    public set $precio(value: number) {
        this.precio = value;
    }

    /**
     * Setter $estado
     * @param {EstadoCoche} value
     */
    public set $estado(value: EstadoCoche) {
        this.estado = value;
    }


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contacto } from '../contacto/contacto';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  src: string;
}
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private global: GlobalService,
    private _snackBar: MatSnackBar
  ) {}

  searchText = '';
  tiles: Tile[] = [
    {
      text: 'Llamar',
      cols: 4,
      rows: 1,
      color: '#ffdc5c',
      src: 'assets/imagenes/phone.svg',
    },
    {
      text: 'Emergencia',
      cols: 2,
      rows: 2,
      color: '#ff6666',
      src: 'assets/imagenes/emergency.svg',
    },
    {
      text: 'Chat',
      cols: 2,
      rows: 1,
      color: 'lightblue',
      src: 'assets/imagenes/chat.svg',
    },
    {
      text: 'Mantenimiento',
      cols: 2,
      rows: 1,
      color: 'lightgrey',
      src: 'assets/imagenes/mantenimiento.svg',
    },
  ];
  ngOnInit(): void {}

  public getContactos = () => {
    return this.global.contactos;
  };
  public getPropiedades = () => {
    return [
      'Nombre',
      'Apellidos',
      'Direccion',
      'Cumpleaños',
      'Telefono',
      'Empleo y puesto',
      'Knowledge',
      'Tipo',
    ];
  };

  public editar = (contacto: Contacto) => {
    const id = this.global.contactos.indexOf(contacto);
    this.router.navigate(['/edit', id]);
  };
  public eliminar = (contacto: Contacto) => {
    const id = this.global.contactos.indexOf(contacto);
    this.global.borrar(id);
  };
}

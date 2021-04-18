import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { MatTable } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private global: GlobalService,
    private _snackBar: MatSnackBar
  ) {}

  searchText = '';
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

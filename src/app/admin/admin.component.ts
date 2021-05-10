import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterModule,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
import { GlobalService } from '../global.service';
import { paciente } from '../paciente/paciente';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private global: GlobalService
  ) {}
  public searchText: string = '';
  ngOnInit() {}

  public getPacientes = () => {
    return this.global.pacientes;
  };
  public getPropiedades = () => {
    return ['Nombre', 'Apellidos', 'Desayuno', 'Comida', 'Cena'];
  };

  public editar = (pac: paciente) => {
    const id = this.global.pacientes.indexOf(pac);
    this.router.navigate(['/edit', id]);
  };
  public eliminar = (pac: paciente) => {
    const id = this.global.pacientes.indexOf(pac);
    this.global.borrar(id);
  };
}

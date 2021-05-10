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
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.scss'],
})
export class FamiliaComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private global: GlobalService
  ) {
    this.paciente = new paciente();
  }
  public id: any;

  public paciente: paciente;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.paciente = new paciente();
    });
  }

  public getPacientes = () => {
    return this.global.pacientes.filter(
      (pac) => pac.$family === this.route.snapshot.params.id
    );
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

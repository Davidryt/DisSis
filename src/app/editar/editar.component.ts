import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterModule,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
import { GlobalService } from '../global.service';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private global: GlobalService
  ) {
    this.contacto = new Contacto();
  }
  public id: any;

  public contacto: Contacto;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.contacto = this.global.getContacto(this.id);
    });
  }
  getTipos() {
    return ['Personal', 'Desarrollo', 'Agile', 'DevOps', 'Compañero'];
  }

  public aceptar() {
    console.log(this.contacto);

    this.router.navigate(['list/']);
  }

  public cancelar() {
    this.router.navigate(['list/']);
  }
}

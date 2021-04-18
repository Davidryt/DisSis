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
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
})
export class CrearComponent implements OnInit {
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
      this.contacto = new Contacto();
    });
  }
  getTipos() {
    return ['Personal', 'Desarrollo', 'Agile', 'DevOps', 'Compañero'];
  }

  public aceptar() {
    console.log(this.contacto);
    this.global.nuevoContacto(this.contacto);

    this.router.navigate(['list/']);
  }

  public cancelar() {
    this.router.navigate(['list/']);
  }
}

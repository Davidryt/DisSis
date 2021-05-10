import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterModule,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GlobalService } from '../global.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private global: GlobalService,
    private cookieService: CookieService
  ) {}
  public id: any;
  public user: any = {
    rol: '',
    name: '',
    pass: '',
  };
  public newUser: any = {
    resi: '',
    user: '',
    password: '',
    fullName: '',
    address: '',
    phone: '',
    id: '',
  };
  public errors: any = {
    rol: '',
    name: '',
    pass: '',
  };
  rol = new FormControl('', [Validators.required]);
  ngOnInit() {
    this.cookieService.delete('session');
  }
  getTipos() {
    return ['Administrador', 'Familiar'];
  }
  getResidencias() {
    return ['Los cisnes', 'Pacio', 'Palacete', 'Gericity', 'Las margaritas'];
  }
  checkForm(form: any): boolean {
    let error: boolean = false;
    Object.entries(form).forEach(([key, value]) => {
      if (!value) {
        this.errors[key] = `Debes completar este campo`;
        error = true;
      } else {
        this.errors[key] = '';
      }
    });
    return error;
  }

  public iniciar = () => {
    this.cookieService.set('session', btoa(JSON.stringify(this.user)));
    if (!this.checkForm(this.user)) {
      if (this.user.rol === 'Administrador') {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate([`family/${this.user.name}`]);
      }
    }
  };

  public registrar() {
    this.cookieService.set('session', btoa(JSON.stringify(this.newUser)));
    if (!this.checkForm(this.newUser)) {
      this.router.navigate([`family/${this.newUser.user}`]);
    }
  }
}

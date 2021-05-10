import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterModule,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GlobalService } from '../global.service';

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
  ngOnInit() {
    this.cookieService.delete('session');
  }
  getTipos() {
    return ['Administrador', 'Familiar'];
  }

  public iniciar = () => {
    this.cookieService.set('session', btoa(JSON.stringify(this.user)));
    if (this.user.rol === 'Administrador') {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate([`family/${this.user.name}`]);
    }
  };

  public cancelar() {
    this.router.navigate(['list/']);
  }
}

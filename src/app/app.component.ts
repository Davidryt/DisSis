import { Component } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//Cambiar a los contactos, objeto por contacto con los valores y crear array

export class AppComponent{
  public title = 'Directorio-I';

  constructor(private router: Router, private route: ActivatedRoute){
  }

}
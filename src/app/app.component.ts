import { Component } from '@angular/core';

@Component ({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
  export class AppComponent {
  title = 'COMANDA'; 
  subtitle = 'Consumiciones';
  seleccionado: string = '';
  costeTotal = 0;
  
  public comidas:Array<[string, number]>=[['Ternera con bambú y setas',7.0], ['Arroz tres delicias',3.5], ['',4.4]]
  
  public comidaSeleccionada=[]; 
  public costecomidaseleccionada=[];

  public addLinea(){
    //hacer
  }
  public delLinea(){
    //hacer
  }

  }
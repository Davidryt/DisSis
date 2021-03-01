import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'COMANDA';
  subtitle = 'Consumiciones';
  seleccionado: string = '';
  costeTotal = 0;


  public comidas: Array<[string, number]> = [['Ternera con bambú y setas', 7.0], ['Arroz tres delicias', 3.5], ['', 4.4]]

  public comidaSeleccionada = 'Ternera con bambú y setas';
  public consumiciones: Array<[string, number]> = [];

  public changeSelected(comida: string) {
    this.comidaSeleccionada = comida;
  }

  public getConsumiciones() {
    return this.consumiciones;
  }

  public getComidas() {
    return this.comidas;
  }

  public addConsumicion() {
    this.consumiciones.push(this.comidas.find((comida) => comida[0] === this.comidaSeleccionada) || ['', 0]);
  }
}


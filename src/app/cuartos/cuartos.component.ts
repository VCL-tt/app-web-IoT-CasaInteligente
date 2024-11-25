import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { HistorialService } from '../historial.service';

interface LedState {
  [key: string]: number;
}

@Component({
  selector: 'app-cuartos',
  templateUrl: './cuartos.component.html',
  styleUrls: ['./cuartos.component.css']
})
export class CuartosComponent {
  estadoLeds$: Observable<LedState | null>;
  historial: { fecha: Date; mensaje: string }[] = [];

  constructor(
    private db: AngularFireDatabase,
    private historialService: HistorialService
  ) {
    this.estadoLeds$ = this.db.object<LedState>('estado_leds').valueChanges();
    this.historial = this.historialService.getHistorial();
  }

  toggleLed(ledKey: string, currentState: number | undefined, cuartoNumero: number): void {
    const newState = currentState === 1 ? 0 : 1;
    const mensaje = `Se ${newState === 1 ? 'encendió' : 'apagó'} la luz del Cuarto ${cuartoNumero}`;
    this.db.object(`estado_leds/${ledKey}`).set(newState);

    // Registrar acción en el historial
    this.historialService.agregarAccion(mensaje);
    this.historial = this.historialService.getHistorial();
  }

}

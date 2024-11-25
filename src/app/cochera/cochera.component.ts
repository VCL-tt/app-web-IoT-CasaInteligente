import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { HistorialService } from '../historial.service';

interface LedState {
  [key: string]: number;
}

@Component({
  selector: 'app-cochera',
  templateUrl: './cochera.component.html',
  styleUrls: ['./cochera.component.css']
})
export class CocheraComponent {
  estadoLeds$: Observable<LedState | null>;
  historial: { fecha: Date; mensaje: string }[] = [];

  constructor(
    private db: AngularFireDatabase,
    private historialService: HistorialService
  ) {
    this.estadoLeds$ = this.db.object<LedState>('estado_leds').valueChanges();
    this.historial = this.historialService.getHistorial();
  }

  toggleCochera(currentState: number | undefined): void {
    const newState = currentState === 1 ? 0 : 1;
    this.db.object('estado_leds/cochera').set(newState);

    // Registrar la acción en el historial
    const mensaje = `Se ${newState === 1 ? 'abrió' : 'cerró'} la puerta de la cochera`;
    this.historialService.agregarAccion(mensaje);
    this.historial = this.historialService.getHistorial();
  }

  toggleLed(ledKey: string, currentState: number | undefined): void {
    const newState = currentState === 1 ? 0 : 1;
    this.db.object(`estado_leds/${ledKey}`).set(newState);

    // Registrar la acción en el historial
    const mensaje = `Se ${newState === 1 ? 'encendió' : 'apagó'} la luz de la cochera`;
    this.historialService.agregarAccion(mensaje);
    this.historial = this.historialService.getHistorial();
  }
}

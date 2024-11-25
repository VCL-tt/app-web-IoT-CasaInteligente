import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistorialService {
  private storageKey = 'historial_acciones';

  constructor() {}

  getHistorial(): { fecha: Date; mensaje: string }[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  agregarAccion(mensaje: string): void {
    const historial = this.getHistorial();
    historial.push({
      fecha: new Date(),
      mensaje,
    });
    localStorage.setItem(this.storageKey, JSON.stringify(historial));
  }
}

import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  historial: { fecha: Date; mensaje: string }[] = [];

  constructor(private historialService: HistorialService) {}

  ngOnInit(): void {
    // Obtener historial al cargar el componente
    this.historial = this.historialService.getHistorial();
  }

  limpiarHistorial(): void {
    localStorage.removeItem('historial_acciones');
    this.historial = [];
  }
}

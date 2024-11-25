import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  // Establecer la IP del ESP32 (puede cambiar dinámicamente si lo obtienes de algún otro servicio o backend)
  esp32Ip: string = '192.168.122.251';  // Reemplaza con la IP dinámica si es necesario

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías agregar lógica para obtener la IP de tu ESP32 si es dinámica
  }
}

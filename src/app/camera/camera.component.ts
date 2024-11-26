import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  // Dirección base de la cámara (puede ser una IP o URL de ngrok)
  esp32Ip: string = 'nearby-relevant-bat.ngrok-free.app ';
  videoUrl!: SafeResourceUrl; // URL segura para Angular

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Construye y marca la URL como segura
    const url = `https://${this.esp32Ip}`;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

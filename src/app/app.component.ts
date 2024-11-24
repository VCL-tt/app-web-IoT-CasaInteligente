import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

interface LedState {
  [key: string]: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estadoLeds$: Observable<LedState | null>;

  constructor(private db: AngularFireDatabase) {
    this.estadoLeds$ = this.db.object<LedState>('estado_leds').valueChanges();
  }

  toggleCochera(currentState: number | undefined): void {
    const newState = currentState === 1 ? 0 : 1;
    this.db.object('estado_leds/cochera').set(newState);
  }

  toggleLed(ledKey: string, currentState: number | undefined): void {
    const newState = currentState === 1 ? 0 : 1;
    this.db.object(`estado_leds/${ledKey}`).set(newState);
  }
}

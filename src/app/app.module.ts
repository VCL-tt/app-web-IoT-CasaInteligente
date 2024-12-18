import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Si usas formularios
import { HttpClientModule } from '@angular/common/http'; // Si necesitas peticiones HTTP
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CocheraComponent } from './cochera/cochera.component';
import { CuartosComponent } from './cuartos/cuartos.component';
import { SalaComponent } from './sala/sala.component';
import { BanosComponent } from './banos/banos.component';
import { PasilloComponent } from './pasillo/pasillo.component';
import { CocinaComponent } from './cocina/cocina.component';
import { HistorialComponent } from './historial/historial.component'; // Para animaciones

const firebaseConfig = {
  apiKey: "AIzaSyBmtHEZ2dlIR3rXovYJo3LZ5Z57lryKYo8",
  authDomain: "iothouse-38abb.firebaseapp.com",
  databaseURL: "https://iothouse-38abb-default-rtdb.firebaseio.com",
  projectId: "iothouse-38abb",
  storageBucket: "iothouse-38abb.appspot.com",
  messagingSenderId: "337746927819",
  appId: "1:337746927819:android:a26eab9007017c3bb23b4e"
};

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    NavbarComponent,
    HomeComponent,
    CocheraComponent,
    CuartosComponent,
    SalaComponent,
    BanosComponent,
    PasilloComponent,
    CocinaComponent,
    HistorialComponent // Declara todos los componentes que uses
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Inicializa Firebase
    AngularFireDatabaseModule, // Base de datos
    FormsModule, // Si usas formularios
    ReactiveFormsModule, // Si usas formularios reactivos
    HttpClientModule, // Para peticiones HTTP
    BrowserAnimationsModule // Para soporte de animaciones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'; // Asegúrate de importar correctamente
import { CameraComponent } from './camera/camera.component'; // Importa tu nuevo componente de cámara

const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta principal
  { path: 'camera', component: CameraComponent }, // Ruta para la vista de la cámara
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

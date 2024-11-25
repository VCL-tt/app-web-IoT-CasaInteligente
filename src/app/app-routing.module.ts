  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { AppComponent } from './app.component'; // Asegúrate de importar correctamente
  import { HomeComponent } from './home/home.component';
  import { CameraComponent } from './camera/camera.component';
  import { CuartosComponent } from './cuartos/cuartos.component';
  import { SalaComponent } from './sala/sala.component';
  import { BanosComponent } from './banos/banos.component';
  import { PasilloComponent } from './pasillo/pasillo.component';
  import { CocinaComponent } from './cocina/cocina.component';
  import { CocheraComponent } from './cochera/cochera.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'cochera', component: CocheraComponent },
  { path: 'cuartos', component: CuartosComponent },
  { path: 'sala', component: SalaComponent },
  { path: 'banos', component: BanosComponent },
  { path: 'pasillo', component: PasilloComponent },
  { path: 'cocina', component: CocinaComponent },
  { path: 'historial', component: HistorialComponent },
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

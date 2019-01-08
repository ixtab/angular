import { ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { LibrosComponent } from './libros/libros.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';

// Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'videojuegos',  component: VideojuegoComponent },
  { path: 'cursos', component: CursosComponent }, // Hay que poner esto también si queremos que nobre sea opcional
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'aplicaciones', component: AplicacionesComponent },
  { path: 'externo', component: ExternoComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: HomeComponent } // siempre la última.
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

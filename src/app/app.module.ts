import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { AplicacionesComponent } from './aplicaciones/aplicaciones.component';
import { CursosComponent } from './cursos/cursos.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { LibrosComponent } from './libros/libros.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    AplicacionesComponent,
    CursosComponent,
    ZapatillasComponent,
    LibrosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

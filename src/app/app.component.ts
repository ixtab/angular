import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public camion: string;
  public mostrar_apis: boolean;
  public mostrar_cursos: boolean;
  public config_titulo: string;
  public config_descripcion: string;
  public config_fondo: string;

  constructor(){
  this.title = 'universo';
  this.camion = 'Camión';
  this.mostrar_apis = true;
  this.mostrar_cursos = true;
  this.config_titulo = Configuracion.titulo;
  this.config_descripcion = Configuracion.descripcion;
  this.config_fondo = Configuracion.fondo;
  }

  visibilidadApis(a){
    if (this.mostrar_apis){
      this.mostrar_apis = false;
    } else {
      this.mostrar_apis = true;
    }
  }

  visibilidadCursos(valor){
    this.mostrar_cursos = valor;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificado: boolean;
  public nombre: string;
  public caja: string;
  public fuera: boolean;

  constructor() {
    this.identificado = false;
    this.nombre = "";
    this.caja = "";
   }

  ngOnInit() {
  }

  identificar(){
    this.identificado = true;
    this.nombre = this.caja;
  }

  salir(){
    this.fuera = confirm(this.nombre + " ¿quieres salir?");
    if (this.fuera){
      this.identificado = false;
      this.caja ="";
    }
  }

}

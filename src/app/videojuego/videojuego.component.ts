import { Component } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: 'videojuego.component.html',
  /*template: `<h4>templa</h4>` ,  Se podría poner html entre las comillas invertidas */
  styleUrls: ['videojuego.component.css']
})

export class VideojuegoComponent{

  public titulo: string;
  public videojuegos: string[];
  public mi_videojuego: string;

  constructor(){
    this.titulo = "Comoponente de listado de videojuegos";
    this.videojuegos = ["GTA", "Prince of Persia", "Mario Karts", "Sonic"];
    this.mi_videojuego = "";
    console.log("Se ha cargado videojuego.component.ts");
  }

  anadirVideojuego(){
    this.videojuegos.push(this.mi_videojuego);
    this.mi_videojuego = "";
    document.getElementById("caja_texto").focus();
  }

  borrarVideojuego(index: number){
    this.videojuegos.splice(index, 1);
  }

  onBlur(){
    console.log("La caja ha perdido el foco");
  }
}

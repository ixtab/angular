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

  constructor(){
    this.titulo = "Comoponente de listado de videojuegos";
    this.videojuegos = ["GTA", "Prince of Persia", "Mario Karts", "Sonic"];
    console.log("Se ha cargado videojuego.component.ts");
  }
}

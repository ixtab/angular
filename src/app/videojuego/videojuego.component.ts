import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'videojuego',
  templateUrl: 'videojuego.component.html',
  /*template: `<h4>templa</h4>` ,  Se podría poner html entre las comillas invertidas */
  styleUrls: ['videojuego.component.css']
})

export class VideojuegoComponent implements OnInit{

  public titulo: string;
  public videojuegos: string[];
  public mi_videojuego: string;
  public enlace: string;

  constructor(
    private _router: Router
  ){
    this.titulo = "Comoponente de listado de videojuegos";
    this.videojuegos = ["GTA", "Prince of Persia", "Mario Karts", "Sonic"];
    this.mi_videojuego = "";
    this. enlace = "/cursos/";
    console.log("Se ha cargado videojuego.component.ts");
  }

  ngOnInit(){
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
  redirigir(){
    if (this.mi_videojuego){
      this.enlace = this.enlace + this.mi_videojuego;
    } else {
      this.enlace = this.enlace + this.videojuegos[this.videojuegos.length - 1];
    }
    this._router.navigate([this.enlace]);
  }
}

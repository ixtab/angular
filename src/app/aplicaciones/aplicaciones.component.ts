import { Component } from "@angular/core";

@Component({
  selector: 'aplicaciones',
  templateUrl: 'aplicaciones.component.html',
  styleUrls: ['aplicaciones.component.css']
})

export class AplicacionesComponent{

  public titulo: string;
  public aplicaciones: string[];

  constructor(){
    this.titulo = "Listado de Aplicaciones";

    this.aplicaciones = ["Word", "PhotoShop", "VLC", "Excel", "Chrome"];
    for( let i = 0; i < this.aplicaciones.length; i++){
      this.aplicaciones[i] = (i + 1) + ".- " + this.aplicaciones[i];
    }
  }

}

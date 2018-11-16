import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit{

  public titulo: string;
  public zapatillas: Array <Zapatilla>;

  constructor() {
    this.titulo = "Componente de Zapatillas";
    this.zapatillas = [
      new Zapatilla("Nike", "Air Jordan", "Blanco, negro y rojo", 150, true),
      new Zapatilla("Converse", "One Star", "Rojo", 80, true),
      new Zapatilla("J'Hayver", "Olimpor", "Blanco", 250, false)
    ]
  }

  ngOnInit(): void {
    for (let i=0; i < this.zapatillas.length; i++){
      console.log(this.zapatillas[i]);
    }
  }

}

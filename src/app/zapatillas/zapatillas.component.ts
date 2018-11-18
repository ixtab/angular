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
  public marcas: string[];
  public folo: string;

  constructor() {
    this.titulo = "Componente de Zapatillas";
    this.zapatillas = [
      new Zapatilla("Nike", "Air Jordan", "Blanco, negro y rojo", 150, true),
      new Zapatilla("J'Hayver", "Olimpor", "Blanco", 250, false),
      new Zapatilla("Converse", "One Star", "Rojo", 80, true),
      new Zapatilla("Nike", "Runner", "Azul", 135, false)
    ]
    this.marcas = new Array;
    this.folo = "nada";
  }

  ngOnInit(): void {
    for (let i=0; i < this.zapatillas.length; i++){
      console.log(this.zapatillas[i]);
    }
    this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla, index)=> {
      if (this.marcas.indexOf(zapatilla.marca) < 0){
        this.marcas.push(zapatilla.marca);
      }
    });
    console.log(this.marcas);
  }

  }

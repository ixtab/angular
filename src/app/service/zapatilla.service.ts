import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
  public zapatillas: Array <Zapatilla>;
  constructor(){
    this.zapatillas = [
      new Zapatilla("Nike", "Air Jordan", "Blanco, negro y rojo", 150, true),
      new Zapatilla("J'Hayver", "Olimpor", "Blanco", 250, false),
      new Zapatilla("Converse", "One Star", "Rojo", 80, true),
      new Zapatilla("Nike", "Runner", "Azul", 135, false)
    ];
  }
  getZapatillas(): Array<Zapatilla>{
    return this.zapatillas;
  }
}

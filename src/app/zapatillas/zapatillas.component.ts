import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../service/zapatilla.service';


@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{

  public titulo: string;
  public zapatillas: Array <Zapatilla>;
  public marcas: string[];
  public folo: string;

  constructor(
    private _zapatillaService: ZapatillaService
  ) {
    this.titulo = "Componente de Zapatillas";

    this.marcas = new Array;
    this.folo = "nada";
  }

  ngOnInit(): void {

    this.zapatillas =  this._zapatillaService.getZapatillas();

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

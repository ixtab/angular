import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
  public usuario: any;
  public idUsuario: any;
  public fecha: any;
  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.usuario ="";
    this.idUsuario = 1;
  }

  ngOnInit() {
    this.fecha = new Date(1971, 2, 5, 17, 32);
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this.usuario = false;
    console.log(this.idUsuario);
    this._peticionesService.getUser(this.idUsuario).subscribe(
      result => {
        console.log(result);
        this.usuario = result.data;
      }, error =>{
        console.log(<any>error);
        this.usuario = "Error al cargar datos";
      }
    );
  }

}

import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public numero: number;
  public contador: number;

  constructor() {
    this.titulo = "Cursos";
    this.numero = 0;
    this.contador = 1;
  }

  ngOnInit() {
    console.log("ngOnInit se carga despues de los constructores");
  }

  ngDoCheck(){
    console.log(
      "ngDoCheck se carga cuando hay un cambio en el componente o en la aplicación. Cambio número: "
      + this.contador
    );
    this.contador++;

  }

  ngOnDestroy(){
    console.log("On DESTROYYYYYYYYYYYY")
  }

  cambiarTitulo(){
    this.titulo = "Título de cursos cambiado";
    this.numero = this.numero + 1;
  }


}

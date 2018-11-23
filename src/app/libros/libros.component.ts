import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';

@Component({
  selector: 'libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Array<Libro>;

  constructor() {
    this.libros = [
      new Libro("El señor de los anillos", "J.R.R. Tolkien", 1275, 22, 3),
      new Libro("Los hijos de Anansi", "Neil Gainman", 379, 19.99, 0),
      new Libro("Sivainvi", "Philip K. Dick", 281, 7, 0),
      new Libro("Dracula", "Bram Stoker", 405, 12, 6),
      new Libro("Carpe Jugulum", "Terry Pratchett",363, 25, 1)
    ]
  }

  ngOnInit() {
  }

}

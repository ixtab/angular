export class Zapatilla {
  /*
  public marca: string;
  public modelo: string;
  public color: string;
  public precio: number;
  public stock: boolean;

  constructor(marca, modelo, color, precio, stock){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.precio = precio;
    this.stock = stock;
  }

    => En vez de definir todas las var y asignarlas luego en
    el constructor se puede hacer directamente en lor params
    recibido del constructor <=
  */

  constructor(
    public marca: string,
    public modelo: string,
    public color: string,
    public precio: number,
    public stock: boolean
  ){}

}

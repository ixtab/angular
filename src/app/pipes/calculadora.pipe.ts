import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform{

  // dato | calculadora: otroDato
  // param1              param2
  transform(valor_uno: any, valor_dos: any){

    let operaciones =`
      Suma: ${valor_uno + valor_dos}. -
      Resta: ${valor_uno - valor_dos}. -
      Multiplicación: ${valor_uno * valor_dos}. -
      División: ${valor_uno / valor_dos}.
    `;
    return operaciones;
  }
}

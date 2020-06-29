import { from } from 'rxjs';
import { reduce, map, filter } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
  const totalReduce = (acu: number, val: number) => {
    return (acu + val);
  };

  const isNumber = (val: any) => {

  };

  from(datos).pipe(
    // Trabajar aquí
    filter<any>((val) => {
        if (!isNaN(val)) {
            return val;
        }
        return 0;
    }),
    reduce(totalReduce)
  ).subscribe( console.log ) // La salida debe de ser 32

})();

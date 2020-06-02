import { of, from } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia.
 * from = array, object, promise, observable
 */

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('Completado')
};

// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('Pepe');
// source$.subscribe(observer);

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
const miIterable = miGenerador();

/*for (let id of miIterable) {
    console.log(id);
}*/

from(miIterable).subscribe(observer);

import { of, range, asyncScheduler } from 'rxjs';

/**
 * Valor inicial y No. de emisiones consecutivas del valor inicial
 */
const src$ = range(1,5, asyncScheduler);

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');

import { asyncScheduler } from 'rxjs';
// una subscripción es el producto de un subscribe

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Pepe');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

/**
 * Formas de simular el setTimeout
 */
// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, 'Pepito');

/**
 * Formas de simular el setInterval
 */
// no puede ser una lamda function
const subs = asyncScheduler.schedule(function(state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

/*setTimeout(() => {
    subs.unsubscribe();
}, 6000);*/

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);

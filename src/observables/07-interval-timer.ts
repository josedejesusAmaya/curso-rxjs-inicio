import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
};

// el primer valor emitido es 0
const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// creamos un interval que inicia en 2seg
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);


// interval$.subscribe(observer);
timer$.subscribe(observer);

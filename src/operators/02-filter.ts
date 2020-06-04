import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(20, 30).pipe(
    filter((val, i) => {
        console.log('index', i);
        return val % 2 == 1;
    })
)//.subscribe(console.log);

interface Personaje {
    tipo: string,
    nombre: string
};

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

from(personajes).pipe(
    filter((obj) => {
        return obj.tipo === 'villano';
    })
).subscribe(console.log);


const keyUp$ =  fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), // keyboardEvent, string
    filter(key => key === 'Enter')
);
keyUp$.subscribe(console.log);

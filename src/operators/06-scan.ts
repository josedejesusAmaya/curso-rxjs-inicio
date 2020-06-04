import { interval, from } from 'rxjs';
import { take, reduce, tap, scan, map } from 'rxjs/operators';

const numbers = [1,2,3,4,5];
const totalAcumulador = (acc: number, val: number ) => acc + val;

const total = numbers.reduce(totalAcumulador, 0);
// console.log('total arreglo', total);

// Reduce
from(numbers).pipe(
    reduce(totalAcumulador, 0)
)
.subscribe(console.log);

// Scan
from(numbers).pipe(
    scan(totalAcumulador, 0)
)
.subscribe(console.log);

// Redux
interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
};

const user: Usuario[] = [
    {id: 'Pepe', autenticado: false, token: null},
    {id: 'Pepe', autenticado: false, token: null},
    {id: 'Pepe', autenticado: false, token: null}
];

const state$ = from(user).pipe(
    scan<Usuario>((acc, cur) => {
        return {...acc, ...cur};
    }, {edad: 33})
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);

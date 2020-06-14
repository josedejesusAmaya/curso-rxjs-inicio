import { fromEvent } from 'rxjs';
import { tap, first, map } from 'rxjs/operators';

const clicks$ = fromEvent<MouseEvent>(document, 'click');

clicks$.pipe(
    tap(() => console.log('tap')),
    /*map(event => ({
        clientY: event.clientY,
        clientX: event.clientX
    }))*/
    map(({clientX, clientY}) => ({ clientY, clientX })), // desestructuracion
    first(event => event.clientY > 150)
    //first<MouseEvent>(event => event.clientY > 150)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});

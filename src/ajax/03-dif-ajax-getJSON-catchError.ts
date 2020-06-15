import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = 'https://httpbinX.org/delay/1';

const manejaError = (resp : AjaxError) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
};

/*const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);
const obs$2 = ajax(url).pipe(
    catchError(manejaError)
);*/

const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);
const obs$2 = ajax(url);

// obs$2.subscribe(data => console.log('ajax ', data));
obs$.subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error en subs', err),
    complete: () => console.log('complete')
});

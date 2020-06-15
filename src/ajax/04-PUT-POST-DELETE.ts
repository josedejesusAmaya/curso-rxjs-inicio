import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = 'https://httpbin.org/delay/1';

// put
/*ajax.post(url, {
    id: 1,
    nombre: 'Pepe'
}, {
    'mi-token': '123ABC'
}).subscribe(console.log);*/

ajax({
    url,
    method: 'POST', //PUT-DELETE
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Pepe'
    }
}).subscribe(console.log);

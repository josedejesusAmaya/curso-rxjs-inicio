import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";
import { } from "rxjs";

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': '123456'
});
obs$.subscribe(data => console.log('data ', data));

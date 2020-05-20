import { Observable } from 'rxjs';

// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {
    subs.next('Hola Pepe');
    subs.complete();
});

obs$.subscribe(console.log);

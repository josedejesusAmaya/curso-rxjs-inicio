import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next : value => console.log('siguiente [next] ', value),
    error: error => console.log('error [obs] ', error),
    complete: () => console.info('completado [obs]')
};

const obs$ = new Observable<string>( subs => {
    subs.next('Hola Pepe');
    subs.complete();
});

obs$.subscribe(observer);

/*obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.warn('error: ', error),
    () => console.info('Completado')
);*/

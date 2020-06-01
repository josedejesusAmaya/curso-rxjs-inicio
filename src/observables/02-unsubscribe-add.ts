import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next : value => console.log('next ', value),
    error: error => console.log('error', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    let count = 1;
    const interval = setInterval(() => {
        subscriber.next(count);
        count++;
        console.log(count);
        
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
        
    }
});


const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);

subs1.add(subs2);

setTimeout(() => {
    subs1.unsubscribe();
    console.log('Unsubcribe timeout');
    
}, 3000);

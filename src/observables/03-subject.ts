import { Observable, Observer, Subject } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next : value => console.log('next ', value),
    error: error => console.log('error', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<Number>(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random())
    }, 1000);

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
        
    }; 
});

// const subs1 = intervalo$.subscribe(rnd => console.log('Subs 1 ' + rnd) );
// const subs2 = intervalo$.subscribe(rnd => console.log('Subs 2 ' + rnd) );

/*
    1. Casteo múltiple.
    2. Es un observer.
    3. next, error y complete.
*/
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);

import { fromEvent, interval } from "rxjs";
import { map, sampleTime, sample } from "rxjs/operators";

const interval$ = interval(5000); // cambia a 500
const click$ = fromEvent(document, 'click');

interval$.pipe(
    sample(click$)
).subscribe(console.log);

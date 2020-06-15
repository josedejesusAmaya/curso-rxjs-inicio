import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

const clik$ = fromEvent<MouseEvent>(document, 'click');

clik$.pipe(
    sampleTime(2000),
    map(({x,y}) => ({x,y}))
).subscribe(console.log);

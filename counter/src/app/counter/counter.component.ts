import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../counter.actions';
import { counterState } from '../counter.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter$: Observable<counterState>;

  constructor(private store: Store<{ counter: counterState }>) {
    this.counter$ = store.pipe(select('counter'));
    this.counter$.subscribe((res) => console.log(res));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}

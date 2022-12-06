import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';
import { counterState } from './counter.model';

export const initialState: counterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 }))
);

import { createReducer, on } from '@ngrx/store';
import { increment, decrement, square, reset } from './counter.actions';

export const initialState = 1;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(square, (state) => state*state),
    on(reset, (state) => 0)
)
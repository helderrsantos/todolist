import {createSlice} from '@reduxjs/toolkit';

export const counter = createSlice({
  name: 'counter',
  initialState: {
    total:0,
  },
  reducers: {
    increment: state => {
      state.total += 1;
    },
    decrement: state => {
      state.total -= 1;
    },
    incrementByAmount: (state, action) => { 
      state.total += action.payload;
    },
    reset: state=> {
      state.total = 0;
    }
  },
});

export const {increment, decrement, incrementByAmount, reset} = counter.actions;

export const counterReducer = counter.reducer;

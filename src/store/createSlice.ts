// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 1,
  reducers: {
    increment: (state:number) => {
      return state + 1;
    },
    decrement: (state:number) => {
      return state >= 1 ? state - 1 : 0;
    },
    clearcount:(_state , _action) => {
      return  1
    }
  },
});

export const { increment, decrement , clearcount } = counterSlice.actions;
export default counterSlice.reducer;
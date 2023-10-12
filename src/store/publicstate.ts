import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  defultcolor: string | undefined;
  defultsize: string | undefined;
  size: string | undefined;
  err: string | undefined;
  price: number | undefined;
}

const initialState: ProductState = {
  defultcolor: undefined,
  defultsize: undefined,
  size: 'Large',
  price: 1000,
  err: "لا شيء"
};

const state = createSlice({
  name: 'product',
  initialState,
  reducers: {
  setDefultColor: (state, action: PayloadAction<string>) => {
  state.defultcolor = action.payload;
  },
  setDefultSize: (state, action: PayloadAction<string>) => {
  state.defultsize = action.payload;
  },
  setSize: (state, action:PayloadAction<string>) => {
  state.size = action.payload;
  },
  setPrice: (state, action:PayloadAction<number>) => {
  state.price = action.payload;
  } 
  },
});

export const { setDefultColor, setDefultSize ,  setSize, setPrice } = state.actions;
export default state.reducer;
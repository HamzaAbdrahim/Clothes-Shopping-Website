import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {typeProduct} from "../components/types"



const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state:typeProduct[], action:PayloadAction<typeProduct>) => {
    const findproduct = state.find((product:typeProduct) => product.id === action.payload.id );
    findproduct ? false : state.push(action.payload);
    },
    deletedfromcart:(state , action) => {
      return state.filter((product:typeProduct) => product.id !== action.payload.id)
    },
    clear:(_state , _action) => {
      return []
    },
  },
});

export const { addItem , deletedfromcart , clear } = cartSlice.actions;
export default cartSlice.reducer;
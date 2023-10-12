import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const ItemsSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
  plusItem: (state, action: PayloadAction) => {
    const finditem = state.find((item) => item === action.payload );
    finditem ? false : state.push(action.payload);
  },
  clearItem: (_state, _action: PayloadAction) => {
  return []
  }
  },
});

export const { plusItem , clearItem } = ItemsSlice.actions;
export default ItemsSlice.reducer;
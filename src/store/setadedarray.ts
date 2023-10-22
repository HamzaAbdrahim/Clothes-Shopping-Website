import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SaveItemState {
  items: string[];
}

const initialState: SaveItemState = {
  items: [],
};

const ItemsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    plusItem: (state, action: PayloadAction<string>) => {
      const finditem = state.items.find((item) => item === action.payload);
      finditem ? false : state.items.push(action.payload);
    },
    clearItem: (state) => {
      state.items = [];
    },
  },
});

export const { plusItem, clearItem } = ItemsSlice.actions;
export default ItemsSlice.reducer;
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SaveItemState {
  items: string[];
}

const initialState: SaveItemState = {
  items: [],
};

const saveItem = createSlice({
  name: 'saveitem',
  initialState,
  reducers: {
    additem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
  },
});

export const { additem } = saveItem.actions;
export default saveItem.reducer;
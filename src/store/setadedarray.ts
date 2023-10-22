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
    plusitem: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
  },
});

export const { plusitem } = saveItem.actions;
export default saveItem.reducer;
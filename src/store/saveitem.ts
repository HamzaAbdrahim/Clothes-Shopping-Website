import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SaveItemState {
  saveditems: string[];
}

const initialState: SaveItemState = {
  saveditems: [],
};

const saveItem = createSlice({
  name: 'saveitem',
  initialState,
  reducers: {
    additem: (state, action:PayloadAction<string>) => {
    state.saveditems.push(action.payload);
    },
  },
});

export const { additem } = saveItem.actions;
export default saveItem.reducer;
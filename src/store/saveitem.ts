import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const saveItem = createSlice({
  name: 'saveitem',
  initialState: [],
  reducers: {
    additem: (state, action:PayloadAction<string>) => {
    state.push(action.payload);
    },
  },
});

export const { additem } = saveItem.actions;
export default saveItem.reducer;
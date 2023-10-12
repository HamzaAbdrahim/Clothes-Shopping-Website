import { createSlice } from '@reduxjs/toolkit';

const saveItem = createSlice({
    name: 'saveitem',
    initialState: [],
    reducers: {
    additem:(state , action) => {
    state.push(action.payload);
    return state
    }
    },
});

export const {additem} = saveItem.actions;
export default saveItem.reducer;
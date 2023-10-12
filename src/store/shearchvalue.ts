import { createSlice } from '@reduxjs/toolkit';

const shearchvalue = createSlice({
    name: 'shearchvalue',
    initialState:"",
    reducers: {
    setshearchvalue: (_state, action) => {
    return action.payload
    },
}
});

export const { setshearchvalue} = shearchvalue.actions;
export default shearchvalue.reducer;
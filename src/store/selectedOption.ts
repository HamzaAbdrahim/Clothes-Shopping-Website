import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type initialState_type = {
    selected_walay:string,
    selected_city:string
}

const initialState: initialState_type = {
selected_walay:"",
selected_city:""
  };
  
const selectedOption = createSlice({
    name: 'selectedOption',
    initialState,
    reducers: {
    set_selected_walay: (state, action: PayloadAction<string>) => {
      state.selected_walay = action.payload;
    },
    set_selected_city: (state, action: PayloadAction<string>) => {
      state.selected_city = action.payload
    },
}
});

export const { set_selected_walay , set_selected_city} = selectedOption.actions;
export default selectedOption.reducer;
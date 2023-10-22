import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { editdate } from '../components/types';

interface ProductState {
  defultcolor: string | undefined;
  defultsize: string | undefined;
  size: string | undefined;
  err: string | undefined;
  price: number | undefined;
  editdate:editdate
}

const initialState: ProductState = {
  defultcolor: undefined,
  defultsize: undefined,
  size: 'Large',
  price: 1000,
  err: "لا شيء",
  editdate:{
    name: "الإسم",
    email: "البريد الإكتروني",
    password: "كلمة السر"
  }
};

const state = createSlice({
  name: 'product',
  initialState,
  reducers: {
  setDefultColor: (state, action: PayloadAction<string>) => {
  state.defultcolor = action.payload;
  },
  setDefultSize: (state, action: PayloadAction<string>) => {
  state.defultsize = action.payload;
  },
  setSize: (state, action:PayloadAction<string>) => {
  state.size = action.payload;
  },
  setPrice: (state, action:PayloadAction<number>) => {
  state.price = action.payload;
  },
  seteditdate:(state, action:PayloadAction<editdate , string>) => {
    const { name, email, password } = action.payload;
    state.editdate.name = name;
    state.editdate.email = email;
    state.editdate.password = password;
  },
  },
});

export const { setDefultColor, setDefultSize ,  setSize, setPrice , seteditdate } = state.actions;
export default state.reducer;
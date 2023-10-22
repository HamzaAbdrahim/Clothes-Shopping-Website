import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { usertype } from '../components/types';
import axios from 'axios';

interface initialStateusertypes {
    loading:boolean,
    data:usertype[]
}
const initialState: initialStateusertypes = {
  loading: false,
  data: []
};


export const getusers = createAsyncThunk<usertype[]>('users/fetch', async () => {
  try {
    const response = await axios.get(`http://localhost:3000/users`);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

const climeusers = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  builder
  .addCase(getusers.pending, (state) => {
  state.loading = true;
  })
  .addCase(getusers.fulfilled, (state, action:PayloadAction<usertype[]>): void => {
  state.data = action.payload;
  state.loading = false;
  })
  .addCase(getusers.rejected, (state) => {
  state.loading = false;
  });
  },
});

export default climeusers.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { order } from '../components/types';
import { initialState } from '../components/Dashbord/Types';

export const getorders = createAsyncThunk<order[]>('products/fetch', async () => {
  try {
    const response = await fetch(`http://localhost:3000/order`);
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
});

const fetchorders = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getorders.pending, (state) => {
        state.loading = true;
      })
      .addCase(getorders.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getorders.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default fetchorders.reducer;
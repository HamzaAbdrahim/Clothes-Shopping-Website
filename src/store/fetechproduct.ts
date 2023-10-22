import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { typeProduct } from '../components/types';
import { initialStateproducttypes } from '../components/Dashbord/Types';
import axios from 'axios';

export const getproduct = createAsyncThunk<typeProduct[]>('products/fetch', async () => {
  try {
    const response = await axios.get<typeProduct[]>(`http://localhost:3000/products`);
    console.log(response.data);
    return response.data;
    
  } catch (error: any) {
    throw new Error(error.message);
  }
});
const initialState: initialStateproducttypes = {
  loading: false,
  data: []
};

const fetechproduct = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
  builder
  .addCase(getproduct.pending, (state) => {
  state.loading = true;
  })
  .addCase(getproduct.fulfilled, (state, action:PayloadAction<typeProduct[]>) => {
  state.data = action.payload;
  state.loading = false;
  })
  .addCase(getproduct.rejected, (state) => {
  state.loading = false;
  });
  },
});

export default fetechproduct.reducer;
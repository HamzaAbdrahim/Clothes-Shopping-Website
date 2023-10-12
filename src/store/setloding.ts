import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  loading: boolean;
  catogray:string
}

const initialState: LoadingState = {
  loading: false,
  catogray:""
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
  setLoading: (state, action: PayloadAction<boolean>) => {
  state.loading = action.payload;
  },
  savecatogray:(_state , action) => {
  return action.payload
  }
  },
});

export const { setLoading , savecatogray } = loadingSlice.actions;
export default loadingSlice.reducer;
import {configureStore } from '@reduxjs/toolkit';
import cartSlice  from '../store/cartSlice';
import counterReducer from './createSlice';
import state from "./publicstate"
import { useDispatch } from 'react-redux';
import fetechproduct from './fetechproduct';
import ItemsSlice from './setadedarray';
import setloding from './setloding';
import fetchorders from "./useorderfatch";
import shearchvalue from './shearchvalue';
import userslice from "./userslice"

export const store = configureStore({
  reducer: {
  counter:counterReducer ,
  cart:cartSlice,
  publicstate:state,
  fetchedproduct:fetechproduct,
  itemsSlice:ItemsSlice,
  loding:setloding,
  orders:fetchorders,
  shearchvalue:shearchvalue,
  users:userslice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

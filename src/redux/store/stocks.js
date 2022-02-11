/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import Save, { saved } from '../../components/SaveData';
// slice
const stocksSlice = createSlice({
  name: 'stocks',
  initialState: {
    profiles: [],
    stocksList: [],
    currentData: {}
  },
  reducers: {
    saveProfiles: (state, action) => {
      Save('profiles', action.payload);
      state.profiles = saved('profiles');
    },
    saveStocksList: (state, action) => {
      Save('stocksList', action.payload);
      state.stocksList = saved('stocksList');
    },
    currentCompany: (state, action) => {
      state.currentData = action.payload;
    },
    searchResults: (state, action) => {
      state.stocksList = action.payload;
    }
  },
});

export default stocksSlice.reducer;

// Actions
export const {
  saveProfiles,
  saveStocksList,
  currentCompany,
  searchResults,
} = stocksSlice.actions;
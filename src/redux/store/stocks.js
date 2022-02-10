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
    }
    // searchProfile: (state, action) => {
    //   const newState = state.stocks.map((mission) => (mission.mission_id === action.payload ? ({ ...mission, status: 'booked' }) : mission));
    //   state.stocks = newState;
    //   Save(newState);
    // },
  },
});

export default stocksSlice.reducer;

// Actions
export const {
  saveProfiles,
  saveStocksList,
  currentCompany,
} = stocksSlice.actions;
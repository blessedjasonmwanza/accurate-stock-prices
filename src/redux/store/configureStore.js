/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stocks from './stocks';
export const reducer = combineReducers({
  // reducers go here
  stocks,
});

const store = configureStore({
  reducer,
  middleware: [thunk, logger],
});

export default store;
import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentTheme, changeCurrentPage, resetPage } from '../action';

const initialState = {
  currentTheme: 'day',
  currentPage: '',
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentTheme, (state, action) => {
      state.currentTheme = action.payload;
    })
    .addCase(changeCurrentPage, (state, action) => {
      state.currentPage = action.payload;
    })
    .addCase(resetPage, (state) => {
      state.currentPage = initialState.currentPage;
    });
});

export {user};

import { createReducer } from '@reduxjs/toolkit';
import { changeCurrentTheme } from '../action';

const initialState = {
  currentTheme: 'day',
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentTheme, (state, action) => {
      state.currentTheme = action.payload;
    });
});

export {user};

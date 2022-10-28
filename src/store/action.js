import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  GET_CURRENT_THEME: 'GET_CURRENT_THEME',
  GET_CURRENT_PAGE: 'GET_CURRENT_PAGE',
  RESET_PAGE: 'RESET_PAGE',
};

export const changeCurrentTheme = createAction(ActionType.GET_CURRENT_THEME, (theme) => ({
  payload: theme,
}));

export const changeCurrentPage = createAction(ActionType.GET_CURRENT_PAGE, (page) => ({
  payload: page,
}));

export const resetPage = createAction(ActionType.RESET_PAGE, (page) => ({
  payload: page,
}));

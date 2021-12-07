import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  GET_CURRENT_THEME: 'GET_CURRENT_THEME',
};

export const changeCurrentTheme = createAction(ActionType.GET_CURRENT_THEME, (theme) => ({
  payload: theme,
}));

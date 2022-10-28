import {NameSpace} from '../root-reducer';

export const getCurrentTheme = (state) => state[NameSpace.USER].currentTheme;

export const getCurrentPage = (state) => state[NameSpace.USER].currentPage;

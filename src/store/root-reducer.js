import {combineReducers} from 'redux';
import {user} from './user/user';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const NameSpace = {
  USER: 'USER',
};

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['USER'],
};

const userPersistConfig = {
  key: 'USER',
  storage,
  whitelist: ['currentTheme', 'currentPage'],
};

const rootReducer = combineReducers({
  [NameSpace.USER]: persistReducer(userPersistConfig, user),
});

export default persistReducer(rootPersistConfig, rootReducer);

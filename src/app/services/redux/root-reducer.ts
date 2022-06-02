import { combineReducers } from '@reduxjs/toolkit';
import user from './slices/user-slice';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;

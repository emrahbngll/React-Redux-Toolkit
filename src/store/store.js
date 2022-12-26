import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from './feature/login/loginSlice';
import { themeReducer } from './feature/login/theme/ThemeSlice';
import { todoReducer } from './feature/login/todo/TodoSlice';

const rootReducers = combineReducers({
  loginReducer,
  themeReducer,
  todoReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};

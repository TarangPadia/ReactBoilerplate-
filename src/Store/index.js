import { configureStore } from '@reduxjs/toolkit'
import createRootReducer from './Reducers';
import { createLogger } from 'redux-logger';
const logger = createLogger({
  collapsed: true,
  duration: false,
  timestamp: true,
  logErrors: true,
  diff: false,
});
const middleware = [logger];
const store = configureStore({
  devTools: true,
  reducer: createRootReducer(),
  middleware
})

export default store;
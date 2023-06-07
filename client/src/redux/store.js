import { configureStore } from '@reduxjs/toolkit';
import trendistaReducer from './trendistaSlice';
export const store = configureStore({
  reducer: {
    trendista: trendistaReducer,
  },
});

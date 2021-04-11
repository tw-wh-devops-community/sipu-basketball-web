import { configureStore } from '@reduxjs/toolkit';
import authorizeReducer from '../features/login/authorizeSlice';
import courtsReducer from '../features/book-court/bookCourtsSlice';

export const store = configureStore({
  reducer: {
    bookCourtsState: courtsReducer,
    loginState: authorizeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

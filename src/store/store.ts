/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import myArticlesReducer from '../slices/myArticlesSlice';
import apiArticlesReducer from '../slices/apiArticlesSlice';

export const store = configureStore({
  reducer: {
    articles: myArticlesReducer,
    apiArticles: apiArticlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

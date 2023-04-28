/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getApiArticles } from '../api/getApiArticles';
import { RootState } from '../store/store';
import { ApiArticle } from '../types/ApiArticle';

export interface State {
  apiArticles: ApiArticle[];
  page: number;
  topic: string;
  status: 'loading' | 'succeeded' | 'failed';
}

const initialState: State = {
  apiArticles: [],
  page: 1,
  topic: 'ukraine',
  status: 'loading',
};

type Info = {
  page: number;
  topic: string;
};

export const loadArticlesAsync = createAsyncThunk(
  'articles/fetchArticles',
  async (info: Info) => {
    const { page, topic } = info;
    const loadedArticles: ApiArticle[] = await getApiArticles(page, topic);

    return loadedArticles;
  },
);

export const apiArticlesSlice = createSlice({
  name: 'apiArticles',
  initialState,
  reducers: {
    increasePage: (state) => {
      state.page += 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    setTopic: (state, action) => {
      state.topic = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadArticlesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadArticlesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.apiArticles = action.payload.articles;
      })
      .addCase(loadArticlesAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default apiArticlesSlice.reducer;

export const { increasePage } = apiArticlesSlice.actions;
export const { resetPage } = apiArticlesSlice.actions;
export const { setTopic } = apiArticlesSlice.actions;
export const selectArticles = (state: RootState) => state.apiArticles.apiArticles;
export const selectPage = (state: RootState) => state.apiArticles.page;
export const selectStatus = (state: RootState) => state.apiArticles.status;

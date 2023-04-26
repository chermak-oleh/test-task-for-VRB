import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Article } from '../types/Article';
import { initialArticles } from '../initialArticles';
/* eslint-disable no-param-reassign */

export interface State {
  articles: Article[];
  pinnedId: number | null;
  searchQuery: string;
}

const initialState: State = {
  articles: initialArticles,
  pinnedId: null,
  searchQuery: '',
};

const myArticleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
    setPinnedId: (state, action: PayloadAction<number>) => {
      state.pinnedId = action.payload;
    },
    addArticle: (state, action: PayloadAction<Article>) => {
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    },
    removeArticle: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        articles: state.articles.filter(article => article.id !== action.payload),
      };
    },
    searchArticles: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setArticles } = myArticleSlice.actions;
export const { setPinnedId } = myArticleSlice.actions;
export const { addArticle } = myArticleSlice.actions;
export const { searchArticles } = myArticleSlice.actions;
export const { removeArticle } = myArticleSlice.actions;
export default myArticleSlice.reducer;

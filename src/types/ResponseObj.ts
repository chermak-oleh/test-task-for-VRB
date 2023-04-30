import { ApiArticle } from './ApiArticle';

export interface ResponseObj {
  status: string;
  totalResults: number;
  articles: ApiArticle[];
}

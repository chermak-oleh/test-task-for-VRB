import { ApiArticle } from '../types/ApiArticle';
import { client } from '../utils/fetchClient';

export const getApiArticles = (page: number, topic: string): Promise<ApiArticle[]> => {
  return client.get(`&page=${page}`, topic);
};
